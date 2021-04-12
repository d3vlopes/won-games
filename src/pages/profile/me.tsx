import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'

import { QueryProfileMe } from 'graphql/generate/QueryProfileMe'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'

import Profile from 'templates/Profile'
import FormProfile, { FormProfileProps } from 'components/FormProfile'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })

  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}

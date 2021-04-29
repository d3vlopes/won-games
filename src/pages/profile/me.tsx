import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'

import {
  QueryProfileMe,
  QueryProfileMeVariables
} from 'graphql/generate/QueryProfileMe'
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

  const { data } = await apolloClient.query<
    QueryProfileMe,
    QueryProfileMeVariables
  >({
    query: QUERY_PROFILE_ME,
    variables: {
      identifier: session?.id
    }
  })

  return {
    props: { session, username: data.user?.username, email: data.user?.email }
  }
}

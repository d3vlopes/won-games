import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import { ordersMapper } from 'utils/mappers'

import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'

import { QueryOrders, QueryOrdersVariables } from 'graphql/generate/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'

export default function Cards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id
    },
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      items: ordersMapper(data.orders),
      session
    }
  }
}

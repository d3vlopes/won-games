import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protected-routes'

import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'

import ordersMock from 'components/OrdersList/mock'

export default function Cards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      items: ordersMock,
      session
    }
  }
}

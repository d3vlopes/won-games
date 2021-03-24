import { useContext, createContext, useState, useEffect } from 'react'

import { useQueryGames } from 'graphql/queries/games'
import { getStorageItem } from 'utils/localStorage'
import { formatPriceUS } from 'utils/format-price'

const CART_KEY = 'cartItems'

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
}

export const CartContextDefaultValues = {
  items: []
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems
      }
    }
  })

  return (
    <CartContext.Provider
      value={{
        items: data?.games.map((game) => ({
          id: game.id,
          img: `http://localhost:1337${game.cover?.url}`,
          price: formatPriceUS(game.price),
          title: game.name
        }))
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
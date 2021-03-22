import { useContext, createContext } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export type CartContextData = {}

export const CartContextDefaultValues = {}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CartProvider = ({ children }: CartProviderProps) => {
  // return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }

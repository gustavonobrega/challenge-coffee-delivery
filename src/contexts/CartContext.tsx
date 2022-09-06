import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { toast } from 'react-toastify'

import { coffees } from '../data/coffees'
import {
  addCoffeeAmountAction,
  addNewCoffeeAction,
  removeCoffeeAction,
  resetCartAction,
  updateCoffeeAmountAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

interface CartContextProviderProps {
  children: ReactNode
}

export interface CartCoffee {
  id: number
  photo: string
  name: string
  price: number
  amount: number
}

interface UpdateCoffeeCart {
  coffeeId: number
  coffeeAmount: number
}

interface CartContextData {
  cart: CartCoffee[]
  addToCart: (coffeeId: number, quantity: number) => void
  updateCoffeeCart: ({ coffeeId, coffeeAmount }: UpdateCoffeeCart) => void
  removeCoffeeCart: (coffeeId: number) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  function addToCart(coffeeId: number, quantity: number) {
    const cartCoffee = cart.find((coffee) => coffee.id === coffeeId)

    if (!cartCoffee) {
      const coffee = coffees.find((coffee) => coffee.id === coffeeId)

      if (coffee) {
        const newCart = {
          id: coffee.id,
          name: coffee.name,
          photo: coffee.photo,
          price: coffee.price,
          amount: quantity,
        }

        dispatch(addNewCoffeeAction(newCart))

        toast.success('Café adicionado no carrinho com sucesso!', {
          position: 'bottom-right',
        })
      }
    } else {
      dispatch(addCoffeeAmountAction(coffeeId, quantity))
    }
  }

  function updateCoffeeCart({ coffeeId, coffeeAmount }: UpdateCoffeeCart) {
    dispatch(updateCoffeeAmountAction(coffeeId, coffeeAmount))
  }

  function removeCoffeeCart(coffeeId: number) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  function cleanCart() {
    dispatch(resetCartAction())
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeCoffeeCart, updateCoffeeCart, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

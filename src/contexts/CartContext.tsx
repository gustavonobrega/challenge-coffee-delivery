import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { coffees } from '../data/coffees'

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
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartCoffee[]>([])

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

        setCart([...cart, newCart])
        toast.success('Café adicionado no carrinho com sucesso!', {
          position: 'bottom-right',
        })
      }
    } else {
      const updatedCart = cart.map((coffee) =>
        coffee.id === coffeeId
          ? {
              ...coffee,
              amount: coffee?.amount + quantity,
            }
          : coffee,
      )

      setCart(updatedCart)
    }
  }

  function updateCoffeeCart({ coffeeId, coffeeAmount }: UpdateCoffeeCart) {
    const cartCoffee = cart.find((coffee) => coffee.id === coffeeId)

    if (cartCoffee) {
      const newCart = cart.map((coffee) =>
        coffee.id === coffeeId
          ? {
              ...coffee,
              amount: coffeeAmount,
            }
          : coffee,
      )

      setCart(newCart)
    }
  }

  function removeCoffeeCart(coffeeId: number) {
    const cartCoffee = cart.find((coffee) => coffee.id === coffeeId)

    if (cartCoffee) {
      const newCart = cart.filter((coffee) => coffee.id !== coffeeId)

      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeCoffeeCart, updateCoffeeCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

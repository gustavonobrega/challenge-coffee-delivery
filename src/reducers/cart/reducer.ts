import produce from 'immer'
import { CartCoffee } from '../../contexts/CartContext'
import { ActionsTypes } from './actions'

export function cartReducer(state: CartCoffee[], action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        draft.push(action.payload.newCart)
      })

    case ActionsTypes.ADD_COFFEE_AMOUNT: {
      const coffeeIndex = state.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft[coffeeIndex].amount =
          draft[coffeeIndex].amount + action.payload.quantity
      })
    }

    case ActionsTypes.UPDATE_COFFEE_AMOUNT: {
      const coffeeIndex = state.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft[coffeeIndex].amount = action.payload.coffeeAmount
      })
    }

    case ActionsTypes.REMOVE_COFFEE: {
      const coffeeIndex = state.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.splice(coffeeIndex, 1)
      })
    }

    case ActionsTypes.RESET_CART:
      return []

    default:
      return state
  }
}

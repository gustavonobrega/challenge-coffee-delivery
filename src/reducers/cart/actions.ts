import { CartCoffee } from '../../contexts/CartContext'

export enum ActionsTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  ADD_COFFEE_AMOUNT = 'ADD_COFFEE_AMOUNT',
  UPDATE_COFFEE_AMOUNT = 'UPDATE_COFFEE_AMOUNT',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  RESET_CART = 'RESET_CART',
}

export function addNewCoffeeAction(newCart: CartCoffee) {
  return {
    type: ActionsTypes.ADD_NEW_COFFEE,
    payload: {
      newCart,
    },
  }
}

export function addCoffeeAmountAction(coffeeId: number, quantity: number) {
  return {
    type: ActionsTypes.ADD_COFFEE_AMOUNT,
    payload: {
      coffeeId,
      quantity,
    },
  }
}

export function updateCoffeeAmountAction(
  coffeeId: number,
  coffeeAmount: number,
) {
  return {
    type: ActionsTypes.UPDATE_COFFEE_AMOUNT,
    payload: {
      coffeeId,
      coffeeAmount,
    },
  }
}

export function removeCoffeeAction(coffeeId: number) {
  return {
    type: ActionsTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}

export function resetCartAction() {
  return {
    type: ActionsTypes.RESET_CART,
  }
}

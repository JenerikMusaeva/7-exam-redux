import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";



export function addObjectToCart(selectedDish) {

  return {
    type: ADD_TO_CART,
    dish: selectedDish
  }
}

export function removeObjectFromCart(id) {

  return {
    type: REMOVE_FROM_CART,
    payload: id,
  }
}
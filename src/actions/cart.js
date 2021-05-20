import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";



export function addObjectToCart(dish) {

  return {
    type: ADD_TO_CART,
    dish: dish
  }
}

export function removeDishFromCart(dish) {

  return {
    type: REMOVE_FROM_CART,
    payload: dish,
  }
}
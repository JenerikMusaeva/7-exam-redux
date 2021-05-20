import { SET_CURRENCY } from "./types";

export function setCurrency(currency) {
  return{
    type: SET_CURRENCY,
    payload: currency,
  }
}
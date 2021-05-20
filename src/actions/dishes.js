import { SET_DISHES } from "./types";

export default function setDishes(data) {
  return{
    type: SET_DISHES,
    payload: data,
  }
}
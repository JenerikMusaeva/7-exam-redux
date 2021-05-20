import { SET_PLACES } from "./types";

export function setPlaces(data) {
  return{
    type: SET_PLACES,
    payload: data,
  }
}
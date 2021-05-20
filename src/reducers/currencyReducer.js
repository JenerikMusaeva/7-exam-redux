import { SET_CURRENCY } from "../actions/types";

const initialState = {
  selected: "kgs",
  currencyList: {
    kgs: 1,
    usd: 0.012,
    kzt: 5.04,
  }
}

export default function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY:
    return {
      ...state,
      selected: action.payload
    }
    break;

    default:
      return state
  } 

}
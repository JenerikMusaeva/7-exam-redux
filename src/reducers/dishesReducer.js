import { SET_DISHES } from "../actions/types";

const initialState = {
  dishes: [],
}

export default function dishesReducer (state = initialState, action) {
  switch (action.type) {
    case SET_DISHES:
      return {
        ...state,
        dishes: action.payload,
      };
      break;

    default:
      return state;
  }
}

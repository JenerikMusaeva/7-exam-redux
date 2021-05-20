import { SET_PLACES } from "../actions/types";

const initialState = {
  places: [],
}

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.payload,
      }
      break

    default:
      return state;
  }
}

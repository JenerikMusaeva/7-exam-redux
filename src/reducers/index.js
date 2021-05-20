import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import currencyReducer from './currencyReducer'
import dishesReducer from './dishesReducer'
import placesReducer from './placesReducers'

export default combineReducers(
  {
    cart: cartReducer,
    dishes: dishesReducer,
    currency: currencyReducer,
    places: placesReducer,
  }
) 
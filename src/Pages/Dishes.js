import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setDishes from '../actions/dishes'
import { useParams } from 'react-router-dom'
import Dish from '../components/Dish'
import {addObjectToCart} from '../actions/cart'

export default function Dishes() {
  let { placeid } = useParams()
  let [loading, setLoading] = useState(true)

  let dispatch = useDispatch()

  let dishes = useSelector(state => state.dishes.dishes)
  let places = useSelector(state => state.places.places)

  useEffect(() => {
    fetch('http://localhost:1717/eats/dishes/' + placeid)
      .then(r => r.json())
      .then(data => {
        dispatch(setDishes(data))
        setLoading(false)
      })
  }, [])

  let addToCart = (id) => {
    let selectedDish = dishes.filter((dish) => dish.id === id);
    dispatch(addObjectToCart(selectedDish[0]));
  };

  let Place = places.find(place => place.id === placeid)

  return (
    <>
      <div className='place-banner'>
        <img alt={Place.name} className='place-img' src={Place.img} />
        
      </div><div className='welcome-banner__info'>
          <h1 className='welcome-banner__title'>{Place.name}</h1>
          <p className='welcome-banner__text'>
            <span className='kitchen'>{Place.cuisine}</span>
          </p>
        </div>

      {loading ? (
        <div> Loading </div>
      ) : (
        <div className='dishes'>
          {dishes.map(dish => (
            <Dish
              data={dish}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </>
  )
}

import { useEffect, useState } from 'react'
import Place from '../components/Place'
import { useDispatch, useSelector } from "react-redux";
import { setPlaces } from '../actions/places'


export default function Places() {
  let [loading, setLoading] = useState(true)
  let dispatch = useDispatch();
  let places = useSelector(state => state.places.places)

  useEffect(() => {
    fetch('http://localhost:1717/eats/places/')
      .then(r => r.json())
      .then((data) => {
        dispatch(setPlaces(data));
        setLoading(false);
      });
  }, [])

  return (
    <>
      {loading ? (
        <div> Loading</div>
      ) : (
        <div className='places'>
          {places.map(place => (
            <Place data={place} />
          ))}
        </div>
      )}
    </>
  )
}

import { useSelector } from 'react-redux'

export default function Dish({ data, addToCart }) {

  let currency = useSelector(state => state.currency)
  let currencyValue = currency.currencyList[currency.selected]
  let currencyText= currency.selected

  return (
    <div className="dish">
      <div class="dish-info">
        <h3 className="name-dish">{data.name}</h3>
        <p className="ingredients">{data.desc}</p>
        <p className="price">{data.price * currencyValue} {currencyText}</p>
        <button
          className="add_to_cart"
          onClick={() => {
            addToCart(data.id);
          }}
        >
          Add to cart
        </button>
      </div>
      <div className="dish-img-box">
        <img className="dish-img" src={data.img} alt={data.name} />
      </div>
    </div>
  );
}

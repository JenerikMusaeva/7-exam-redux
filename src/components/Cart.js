import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeDishFromCart } from "../actions/cart";

export default function Cart({ openCart, toggleCart }) {
  let dispatch = useDispatch();
  let dishes = useSelector((state) => state.cart.dishes);
  let totalPrice = useSelector((state) => state.cart.totalPrice);
  let currency = useSelector(state => state.currency)
  let currencyValue = currency.currencyList[currency.selected]


  return (
    <div className={`cart ${openCart ? "open" : ""}`}>
      <button className="btn_close_cart" onClick={toggleCart}>
        &#10006;
      </button>
      {!!dishes.length ? (
        <div className="cart_items">
          {dishes.map((dish) => {
            return (
              <div className="cart_item">
                <div>{dish.name}</div>
                <div>
                  {dish.quantity} x ({dish.price * currencyValue}
                  {currency.selected}) =
                  {dish.price * currencyValue * dish.quantity}
                  {currency.selected}
                </div>
                <button
                  onClick={() => {
                    dispatch(removeDishFromCart(dish));
                  }}
                >
                  X
                </button>
              </div>
            );
          })}

          <div className="total_price">
            Total price: {totalPrice * currencyValue} {currency.selected}
          </div>

          <Link to="/checkout">
            <div className="btn_to_checkout">Check out</div>
          </Link>
        </div>
      ) : (
        <h3>Cart is empty!</h3>
      )}
    </div>
  );
}

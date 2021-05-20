import { useDispatch, useSelector } from "react-redux";
import { removeDishFromCart } from "../actions/cart";

export default function CheckOut({ setOpenCart }) {
  let dispatch = useDispatch();
  let dishes = useSelector((state) => state.cart.dishes);
  let totalPrice = useSelector((state) => state.cart.totalPrice);
  let currency = useSelector((state) => state.currency);
  let currencyValue = currency.currencyList[currency.selected];

  setOpenCart(false);

  return (
    <div className="checkout">
      <h3>Check Out</h3>

      {!!dishes.length ? (
        <div className="cart_items">
          {dishes.map((dish) => {
            return (
              <div className="checkout_item">
                <div className="dish-img-box">
                  <img alt={dish.name} className="dish-img " src={dish.img} />
                </div>
                <div className="checkout_name">{dish.name}</div>
                <div className="checkout_price">
                  {dish.quantity} x ({dish.price * currencyValue}
                  {currency.selected}) =
                  {dish.price * currencyValue * dish.quantity}
                  {currency.selected}
                </div>
                <button
                  onClick={() => {
                    dispatch(removeDishFromCart(dish.id));
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

          <button className="btn-checkout">Checkout</button>
        </div>
      ) : (
        <h3>Cart is empty!</h3>
      )}
    </div>
  );
}

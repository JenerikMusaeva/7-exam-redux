import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Places from "./Pages/Places";
import Dishes from "./Pages/Dishes";
import CheckOut from "./Pages/CheckOut";
import { useDispatch } from "react-redux";
import { setCurrency } from "./actions/currency";
import "./Style.css";

export let AppContext = createContext(null);

function App() {
  let [openCart, setOpenCart] = useState(false);
  let toggleCart = () => setOpenCart(!openCart);

  let handleCurrencyChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  let dispatch = useDispatch();

  return (
    <Router>
      <Header
        toggleCart={toggleCart}
        handleCurrencyChange={handleCurrencyChange}
      />

      <Cart
        setOpenCart={setOpenCart}
        openCart={openCart}
        toggleCart={toggleCart}
      />

      <div className="content">
        <Switch>
          <Route path="/checkout" exact>
            <CheckOut setOpenCart={setOpenCart} />
          </Route>
          <Route path="/dishes/:placeid" component={Dishes} />
          <Route path="/" exact component={Places} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;

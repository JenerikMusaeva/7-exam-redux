import { useSelector } from "react-redux";


export default function Currency({handleCurrencyChange}) {

  let currency = useSelector(state => state.currency);

  return (
    
      <select className="currency" onChange={handleCurrencyChange} value={currency.selected}>
        {Object.keys(currency.currencyList).map((curren) => {
          return <option value={curren}>{curren}</option>;
        })}
      </select>
    
  );
}

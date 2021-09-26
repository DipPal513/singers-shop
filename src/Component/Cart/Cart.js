import {React} from "react";
import "./Cart.css";
export const Cart = (props) => {
  let total = 0;
  const {cart} = props;
  cart.map((singer) => {
    total += singer.salary;
  });

  return (
    <div className="cart">
      <h4>cart summary</h4>
      <h5>Singer Added: {props.cart.length} </h5>
      <h5>Total Cost: {total}</h5>
     
      <button className="btn btn-info">Buy Now</button>
      <h5 className = 'mt-3'>Singer's added</h5>
      <ul>
      {
        cart.map( item => <li key= { item.key} style = {{listStyle: 'none' ,textAlign:'left'}}>{item.name} </li>)
      }
      </ul>
    </div>
  );
};

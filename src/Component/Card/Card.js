import React from "react";
// importing fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

export const Single = (props) => {
  const cart = <FontAwesomeIcon icon={faCartPlus} />;
  // destructuring
  const { img, name, age, netWorth, salary, role,key } = props.singer;
  return (
    <div className="col-lg-4 col-md-6 col-sm-8 mb-4">
      <div className="card h-100 card-bg">
        <img src={img} className="card-img-top card-img" />
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <h5 className="card-title">Age : {age}</h5>
          <h5 className="card-title">Salary : {salary}</h5>
          <h5 className="card-title">Role : {role}</h5>
          <h5 className="card-title">Net Worth : {netWorth}</h5>
          <button
            onClick={() => props.handleAddToCart(props.singer)}
            className="btn btn-primary"
          >
            {cart} Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

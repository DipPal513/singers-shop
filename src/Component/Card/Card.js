import React from "react";
import './Card.css'
export const Single = (props) => {
    const {img,name,age,netWorth,salary,role} = props.singer;
   
  return (
    <div className="col-lg-4 mb-4">
      <div className="card h-100 card-bg">
        <img src={img} className="card-img-top card-img"  />
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <h5 className="card-title">Age : {age}</h5>
          <h5 className="card-title">Salary : {salary}</h5>
          <h5 className="card-title">Role : {role}</h5>
          <h5 className="card-title">Net Worth : {netWorth}</h5>
          <button onClick = {() => props.handleAddToCart(props.singer)} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

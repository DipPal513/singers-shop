import React, { useEffect, useState } from "react";
import { Single } from "../Card/Card";
import { Cart } from "../Cart/Cart";
import "./Shop.css";

export const Shop = () => {
  const [singers, setSingers] = useState([]);
  const [cart, setCart] = useState([]);
  // fetching data
  useEffect(() => {
    fetch("./Data.JSON")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);

  const handleAddToCart = (singer) => {
    // for cart
    const newCart = [...cart, singer];
    setCart(newCart);
  };
  return (
    <div className="row mt-5">
      <div className="col-lg-9">
        <div className="row">
          {singers.map((singer) => (
            <Single
              singer={singer}
              key={singer.key}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="col-lg-3">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

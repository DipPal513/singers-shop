import React from 'react'

export const Cart = (props) => {
    
    let total = 0;
    props.cart.map((singer) => {
        total += singer.salary;
    })
    return (
       <div className = 'cart'>
           <h4>cart summary</h4>
           <h5>Singer Added: {props.cart.length} </h5>
           <h5>Total Cost: {total}</h5>
           <button className = 'btn btn-info'>Buy Now</button>
       </div>
    )
}

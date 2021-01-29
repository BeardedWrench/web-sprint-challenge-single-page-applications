import React from 'react';

export default function Card( props ){


  return(
      <div className="card">
          <img src="https://www.papajohns.com/free-pizza/img/hero-free-pizza.jpg"/>
          <h3>Pepperoni Pizza</h3>
          <div className="card-cta">
              <h4>$12.99</h4>
              <button>Order</button>
          </div>
      </div>
  );
}
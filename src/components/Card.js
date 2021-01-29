import React from 'react';

export default function Card( props ){
    const { img, price, name } = props;

  return(
      <div className="card">
          <img src={ img }/>
          <h3>{ name }</h3>
          <div className="card-cta">
              <h4>${ price }</h4>
              <button>Order</button>
          </div>
      </div>
  );
}


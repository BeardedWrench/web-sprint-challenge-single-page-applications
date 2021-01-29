import React from 'react';

export default function Pizza( props ){
    const { details } = props;

  return(
    <div className="pizza-card">
        <h2>Your Order</h2>

        <h3>Details</h3>
        <div className="pizza-details">
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map( ( topping, idx ) => <li key={ idx }>{ topping }</li>)}
                    </ul>
                </div>
            }

            <p>Instructions: {details.additional}</p>
        </div>
    </div>
  );
}
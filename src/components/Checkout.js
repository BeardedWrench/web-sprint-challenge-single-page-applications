import React from 'react';


import Navigation from './Navigation';
import Footer from './Footer';
import Pizza from './Pizza';

export default function Checkout( props ){
    const { details } = props;

  return(
      <div>
          <Navigation />
          <div className="checkout-img">
              <h2>Congrats! Your pizza is on it's way!</h2>
          </div>

          <div className="checkout-container">
              {
                  details.map( pizza => {
                      return (
                          <Pizza details={ pizza }/>
                      )
                  })
              }
          </div>
          <Footer />
      </div>
  );
}
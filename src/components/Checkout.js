import React from 'react';


import Navigation from './Navigation';
import Footer from './Footer';

export default function Checkout( props ){
    const { details } = props;

  return(
      <div>
          <Navigation />
          <div className="checkout-img">
              <h2>Congrats! Your pizza is on it's way!</h2>
          </div>

          test this:
          <div>
              {
                  console.log(details)
              }
          </div>
          <Footer />
      </div>
  );
}
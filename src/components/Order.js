import React from 'react';


/**
 * Custom Imports 
 */
import Navigation from './Navigation';
import Footer from './Footer';
import Form from './Form';
export default function Order( props ){


  return(
      <div>
          <Navigation />
          <Form />
          <Footer />
      </div>
  );
}
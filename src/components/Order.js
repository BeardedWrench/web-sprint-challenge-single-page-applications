import React from 'react';


/**
 * Custom Imports 
 */
import Navigation from './Navigation';
import Footer from './Footer';
import Form from './Form';
export default function Order( props ){
  const { values, submit, change, disabled, errors } = props;

  return(
      <div>
          <Navigation />
          <Form 
            values={ values }
            change={ change }
            submit={ submit }
            disabled={ disabled }
            errors={ errors }
          />
          <Footer />
      </div>
  );
}
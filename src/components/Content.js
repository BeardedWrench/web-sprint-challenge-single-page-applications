import React from 'react';

import Card from './Card';

/**
 * Import images 
 */
import pep from '../images/food/pep.jpg'
import sausage from '../images/food/sausage.jpg'
import meats from '../images/food/meats.jpg'
import spinach from '../images/food/spinach.jpg'
import disgrace from '../images/food/disgrace.jpg'
import cheese from '../images/food/cheese.jpg'
export default function Content( props ){


  return(
    <div className="content-container">
      <h2>Food Delivery in Gotham City</h2>
      <div className="content">
        <Card img={pep} name={'Pepperoni'} price={'8.49'}/>
        <Card img={sausage} name={'Sausage'} price={'10.99'}/>
        <Card img={meats} name={'The Meats'} price={'12.99'}/>
        <Card img={spinach} name={'Fresh Spinach & Tomato Alfredo'} price={'14.99'}/>
        <Card img={disgrace} name={'Hawaiian BBQ Chicken'} price={'16.99'}/>
        <Card img={cheese} name={'Tuscan Six Cheese'} price={'16.99'}/>
      </div>
    </div>
  );
}
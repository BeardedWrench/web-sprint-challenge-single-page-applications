import React from 'react';

import Card from './Card';
export default function Content( props ){


  return(
    <div className="content-container">
      <h2>Food Delivery in Gotham City</h2>
      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
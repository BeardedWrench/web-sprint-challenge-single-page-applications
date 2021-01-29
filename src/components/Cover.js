import React from 'react';
import { Link } from 'react-router-dom';

export default function Cover( props ){


  return(
    <div className="cover">
      <h2>Your favorite food, delivered while coding</h2>
      <Link to="/order" className="cta-btn">Order Now</Link>
    </div>
  );
}
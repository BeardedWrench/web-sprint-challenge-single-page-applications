import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation( props ){


  return(
    <div className="navigation">
      <h1>Lambda Pizza</h1>
      <nav>
        <Link to="/" className="btn">Home</Link>
        <Link to="/order" className="btn">Order</Link>
      </nav>
    </div>
  );
}
import React from 'react';


/**
 * CUSTOM IMPORTS 
 */
import Cover from './Cover';
import Navigation from './Navigation';

export default function Header( props ){


  return(
    <div className="header">
      <Navigation />
      <Cover />
    </div>
  );
}
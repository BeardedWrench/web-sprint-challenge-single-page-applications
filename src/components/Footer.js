import React from 'react';

export default function Footer( props ){


  return(
    <div className="footer">
      <h2>Lambda Pizza</h2>
     
      <div className="footer-links">
        <a href="#">Contact Us</a>|<a href="#">Locations</a>
      </div>
      <p>Copyright &copy; 2020 LambdaPizza.com</p>
    </div>
  );
}
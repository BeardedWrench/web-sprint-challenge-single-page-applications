import React from "react";
import { Switch, Route }  from 'react-router-dom';
import './App.css'

/**
 * CUSTOM IMPORTS
 */
import Home from './components/Home';
import Order from './components/Order';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/order" component={ Order } />

        <Route path="/checkout" component={ Checkout } />

        <Route path="/" component={ Home } />
      </Switch>
    </div>
  );
};
export default App;

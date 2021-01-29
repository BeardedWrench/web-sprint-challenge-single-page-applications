import React, { useState, useEffect } from "react";
import { Switch, Route }  from 'react-router-dom';
import './App.css'

/**
 * CUSTOM IMPORTS
 */
import Home from './components/Home';
import Order from './components/Order';
import Checkout from './components/Checkout';


import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/schema';

const initFormVals = {
  size: '',
  sauce: '',
  additional: '',

  pepperoni: false,
  sausage: false,
  onions: false,
  greenPepper: false,
}
const initFormErrors = {
  size: '',
  sauce: '',
}

const initPizza = [];
const initDisabled = true;

const App = () => {

  const [ pizza, setPizza ] = useState( initPizza )
  const [ formVals, setFormVals ] = useState( initFormVals );
  const [ formErrors, setFormErrors ] = useState( initFormErrors );
  const [ disabled, setDisabled ] = useState( initDisabled );

  const getPizza = () => {
    axios.get( `https://reqres.in/api/orders` )
      .then( res => setPizza( res.data ) )
      .catch( err => console.log( err ) )
  }

 const postPizza = newPizza => {
   axios.post( `https://reqres.in/api/orders`, newPizza )
    .then( res => setPizza( [ res.data, ...pizza ] ) )
    .catch( err => console.log( err ) )
    .finally( () => setFormVals( initFormVals ) )
 }

 const inputChange = ( name, value ) => {
   yup.reach( schema, name)
    .validate( value )
    .then( () => {
      setFormErrors( {
        ...formErrors,
        [ name ]: "",
      } )
    } )
    .catch( err => {
      setFormErrors( {
        ...formErrors,
        [ name ]: err.errors[ 0 ],
      } )
    } )
    setFormVals({
      ...formVals,
      [ name ]: value,
    } )
 }
 const formSubmit = () => {
   const newPizza = {
    size: formVals.size,
    sauce: formVals.sauce,
    additional: formVals.additional,
    toppings: ['pepperoni', 'sausage', 'onions', 'greenPepper' ].filter( topping => {
      return formVals[topping];
    })
   }
   postPizza( newPizza );
 }

  useEffect( () => {
    schema.isValid( formVals ).then( valid => setDisabled( !valid ) )
  }, [ formVals ] )

  return (
    <div className="App">
      <Switch>
        <Route path="/order">
          <Order 

          values={ formVals }
          change={ inputChange }
          submit={ formSubmit }
          disabled={ disabled }
          errors={ formErrors }

          />
        </Route>

        <Route path="/checkout">
          <Checkout details={ pizza } />
        </Route>

        <Route path="/" component={ Home } />
      </Switch>
    </div>
  );
};
export default App;

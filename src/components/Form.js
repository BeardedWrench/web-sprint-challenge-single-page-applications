import React from 'react';

export default function Form( props ){


  return(
    <div className="order-form">
        <h2>Build Your Own Pizza</h2>
        <div className="order-img"></div>
        <div className="form-content">
            <h3>Build Your Own Pizza</h3>

            <form>
                <div className="form-label">
                    <h4>Choice of Size</h4>
                    <span>Required</span>
                </div>

                <div className="form-options">
                    <select>
                        <option>Select</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

                <div className="form-label">
                    <h4>Choice of Sauce</h4>
                    <span>Required</span>
                </div>

                <div className="form-options">
                    <input type="radio" id="redSauce"/>
                    <label for="redSauce">Original Red</label><br/>

                    <input type="radio" id="garlicRanch"/>
                    <label for="garlicRanch">Garlic Ranch</label><br/>

                    <input type="radio" id="bbq"/>
                    <label for="bbq">BBQ Sauce</label><br/>

                    
                    <input type="radio" id="spinach"/>
                    <label for="spinach">Spinach Alfredo</label><br/>
                </div>

                <div className="form-label">
                    <h4>Add Toppings</h4>
                    <span>Choose up to 10.</span>
                </div>

                <div className="form-options">
                    <input type="checkbox" id="pepperoni"/>
                    <label for="pepperoni">Pepperoni</label><br/>

                    <input type="checkbox" id="sausage"/>
                    <label for="sausage">Sausage</label><br/>

                    <input type="checkbox" id="CanadianBacon"/>
                    <label for="CanadianBacon">Canadian Bacon</label><br/>

                    <input type="checkbox" id="spicySausage"/>
                    <label for="spicySausage">Spicy Italian Sausage</label><br/>

                    <input type="checkbox" id="grilledChick"/>
                    <label for="grilledChick">Grilled Chicken</label><br/>

                    <input type="checkbox" id="onions"/>
                    <label for="onions">Onions</label><br/>

                    <input type="checkbox" id="greenPepper"/>
                    <label for="greenPepper">Green Pepper</label><br/>
                </div>

                <div className="form-label">
                    <h4>Special Instructions</h4>
                </div>
                <div className="form-options">
                    <input type="text" placeholder="Anything else you'd like to add?"/>
                </div>

                <button>Add to Order</button>
            </form>
        </div>
    </div>
  );
}
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Form( props ){
    const { values, submit, change, disabled, errors } = props;

    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault();
        submit();
        history.push('/checkout');
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target;
        change( name, type === 'checkbox' ? checked : value);
    }

  return(
    <div className="order-form">
        <h2>Build Your Own Pizza</h2>
        <div className="order-img"></div>
        <div className="form-content">
            <h3>Build Your Own Pizza</h3>

            <form onSubmit={ onSubmit }>
                <div className="form-label">
                    <h4>Choice of Size</h4>
                    <span>Required</span>
                </div>

                <div className="form-options">
                    <select name="size" value={ values.size } onChange={ onChange }>
                        <option value="">Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                <div className="form-label">
                    <h4>Choice of Sauce</h4>
                    <span>Required</span>
                </div>

                <div className="form-options">
                    <input type="radio" name="sauce" value="Original-Red" checked={ values.sauce === 'Original-Red' } onChange={ onChange }/>
                    <label for="redSauce">Original Red</label><br/>

                    <input type="radio" name="sauce" value="Garlic-Ranch" checked={ values.sauce === 'Garlic-Ranch' } onChange={ onChange }/>
                    <label for="garlicRanch">Garlic Ranch</label><br/>

                    <input type="radio" name="sauce" value="BBQ-Sauce" checked={ values.sauce === 'BBQ-Sauce' } onChange={ onChange }/>
                    <label for="bbq">BBQ Sauce</label><br/>

                    
                    <input type="radio" name="sauce" value="Spinach-Alfredo" checked={ values.sauce === 'Spinach-Alfredo' } onChange={ onChange }/>
                    <label for="spinach">Spinach Alfredo</label><br/>
                </div>

                <div className="form-label">
                    <h4>Add Toppings</h4>
                    <span>Choose up to 4.</span>
                </div>

                <div className="form-options">
                    <input type="checkbox" name="pepperoni" checked={ values.pepperoni } onChange={ onChange }/>
                    <label for="pepperoni">Pepperoni</label><br/>

                    <input type="checkbox" name="sausage" checked={ values.sausage } onChange={ onChange }/>
                    <label for="sausage">Sausage</label><br/>

                    <input type="checkbox" name="onions" checked={ values.onions } onChange={ onChange }/>
                    <label for="onions">Onions</label><br/>

                    <input type="checkbox" name="greenPepper" checked={ values.greenPepper } onChange={ onChange }/>
                    <label for="greenPepper">Green Pepper</label><br/>
                </div>

                <div className="form-label">
                    <h4>Special Instructions</h4>
                </div>
                <div className="form-options">
                    <input type="text" placeholder="Anything else you'd like to add?" name="additional" onChange={ onChange } value={ values.additional }/>
                </div>

                <button disabled={ disabled }>Add to Order</button>
            </form>

            <div className='errors'>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
            </div>
        </div>
    </div>
  );
}
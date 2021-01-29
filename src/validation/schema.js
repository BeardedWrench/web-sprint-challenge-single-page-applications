import * as yup from 'yup';

export default yup.object().shape({
    size: yup.string()
        .oneOf( [ 'small', 'medium', 'large' ], 'Pizza size is required.' ),

    sauce: yup.string()
        .oneOf( ['Original-Red', 'Garlic-Ranch', 'BBQ-Sauce', 'Spinach-Alfredo' ], 'Sauce type is required.' ),

    additional: yup.string(),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
})

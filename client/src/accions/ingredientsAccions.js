import axios from 'axios';
import { GET_INGREDIENTS, INGREDIENTS_LOADING } from './types';

export const get_ingredients = () => dispatch => {
    dispatch(setIngredientsLoading());
    axios.get('/api/ingredients')
        .then(res =>
            dispatch({
                type: GET_INGREDIENTS,
                payload: res.data
            })

        );
};

export const setIngredientsLoading = () => {
    return {
        type: INGREDIENTS_LOADING
    };
};



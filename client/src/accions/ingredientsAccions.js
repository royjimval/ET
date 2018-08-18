import axios from 'axios';
import { GET_INGREDIENTS, INGREDIENTS_LOADING, POST_INGREDIENTS } from './types';

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
export const addIngredients = item => dispatch => {
    console.log(item)
    axios.post('/api/ingredients', item).then(res =>
        dispatch({
            type: POST_INGREDIENTS,
            payload: res.data
        })
    );
};
export const setIngredientsLoading = () => {
    return {
        type: INGREDIENTS_LOADING
    };
};



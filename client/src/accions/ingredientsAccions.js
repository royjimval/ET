import axios from 'axios';
import { GET_INGREDIENTS, INGREDIENTS_LOADING, POST_INGREDIENTS, GET_INGREDIENTS_ID } from './types';

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

export const get_ingredient_id = id => dispatch => {
    console.log(id)
    axios.get(`/api/ingredients/${id}`).then(res =>
        dispatch({
            type: GET_INGREDIENTS_ID,
            payload: res.data
        })
    );
};

export const putInventory = (id, name, sellprice, stock, buyPrice) => {
    console.log(id)
    axios.put(`/api/ingredients/${id}`, {
        name: name,
        sellprice: sellprice,
        stock: stock,
        buyPrice: buyPrice
    })
        .then(response => {
            console.log(response);
        })
};


export const setIngredientsLoading = () => {
    return {
        type: INGREDIENTS_LOADING
    };
};


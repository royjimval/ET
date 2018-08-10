
import axios from 'axios';
import { GET_PRODUCT, PRODUCT_LOADING, ADD_PRODUCT, GET_PRODUCT_BREAKFAST, GET_PRODUCT_DINNER, GET_PRODUCT_MEAL, GET_PRODUCT_DRINK, GET_PRODUCT_DESSERT } from './types';

export const getproduct = () => dispatch => {
  dispatch(setproductsLoading());
  axios.get('/api/food')
  .then(res =>
    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    })
    
  );
};


export const getproduct_Breakfast = () => dispatch => {
  dispatch(setproductsLoading());
  axios.get('/api/food/Breakfast')
    .then(res =>
      dispatch({
        type: GET_PRODUCT_BREAKFAST,
        payload: res.data
      })

    );
};

export const getproduct_Meal = () => dispatch => {
  dispatch(setproductsLoading());
  axios.get('/api/food/Meal')
    .then(res =>
      dispatch({
        type: GET_PRODUCT_MEAL,
        payload: res.data
      })

    );
};

export const getproduct_Dinner = () => dispatch => {
  dispatch(setproductsLoading());
  axios.get('/api/food/Dinner')
    .then(res =>
      dispatch({
        type: GET_PRODUCT_DINNER,
        payload: res.data
      })

    );
}; 

export const getproduct_Drink = () => dispatch => {
  dispatch(setproductsLoading());
  axios.get('/api/food/Drink')
    .then(res =>
      dispatch({
        type: GET_PRODUCT_DRINK,
        payload: res.data
      })

    );
}; 

export const getproduct_Dessert = () => dispatch => {
  dispatch(setproductsLoading());
  axios.get('/api/food/Dessert')
    .then(res =>
      dispatch({
        type: GET_PRODUCT_DESSERT,
        payload: res.data
      })

    );
};


export const addProduct = item => dispatch => {
  axios.post('/api/food', item).then(res =>
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    })
  );
};



export const setproductsLoading = () => {
    return {
      type: PRODUCT_LOADING
    };
  };
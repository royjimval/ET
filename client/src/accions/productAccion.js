
import axios from 'axios';
import { GET_PRODUCT, PRODUCT_LOADING, ADD_PRODUCT } from './types';

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
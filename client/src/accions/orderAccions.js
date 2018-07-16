import axios from 'axios';
import { GET_ORDER, ORDER_LOADING, DELETE_ORDER } from './types';

export const getOrder = () => dispatch => {
  dispatch(setOrderLoading());
  axios.get('/api/order')
  .then(res =>
    dispatch({
      type: GET_ORDER,
      payload: res.data
    })
    
  );
};


export const deleteOrder = id => dispatch => {
  axios.delete(`/api/order/${id}`).then(res =>
    dispatch({
      type: DELETE_ORDER,
      payload: id
    })
  );
};

export const setOrderLoading = () => {
    return {
      type: ORDER_LOADING
    };
  };
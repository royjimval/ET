import axios from 'axios';
import { GET_ORDER, ORDER_LOADING, DELETE_ORDER, UPDATE_ORDER, ADD_ORDER } from './types';

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


export const updateOrder = id => dispatch => {
  axios.put(`/api/order/${id}`).then(res =>
    dispatch({
      type: UPDATE_ORDER,
      payload: id
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

export const addOrder = item => dispatch => {
  console.log(item.new_id)
  axios.post('/api/order/', item).then(res =>
    dispatch({
      type: ADD_ORDER,
      payload: res.data
    })
  );
};

export const setOrderLoading = () => {
    return {
      type: ORDER_LOADING
    };
  };
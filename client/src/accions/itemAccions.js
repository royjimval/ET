
import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING, DELETE_ITEM, ADD_ITEM } from './types';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/attention')
  .then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
    
  );
};

export const addItem = item => dispatch => {
  axios.post('/api/attention', item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/attention/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
    return {
      type: ITEMS_LOADING
    };
  };
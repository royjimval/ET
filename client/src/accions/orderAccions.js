import axios from 'axios';
import { GET_ORDER, GET_ORDER_BY_DATE, GET_ORDER_BY_DATE_FT, ORDER_LOADING, DELETE_ORDER, UPDATE_ORDER, ADD_ORDER } from './types';

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
// dateft ? from = 2018 / 08 / 05 & to=2018 / 08 / 06


export const getdateft = (data) => dispatch => {
  console.log(data)
  let url = '/api/order/dateft?from=' + data.from + '&to=' + data.to
  console.log(url)
  axios.get(url).then(res =>
    dispatch({

      type: GET_ORDER_BY_DATE_FT,
      payload: res.data
    })
  );
};

export const getdate = date => dispatch => {
  console.log(date)
  axios.get('/api/order/date?date=' + date).then(res =>
    dispatch({
      type: GET_ORDER_BY_DATE,
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
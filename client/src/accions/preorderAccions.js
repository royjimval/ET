import axios from 'axios';
import { ADD_PREORDER, GET_PREORDER, DELET_PREORDER } from './types';

export const addPreorder = item => dispatch => {
  axios.post('/api/preorder', item).then(res =>
    dispatch({
      type: ADD_PREORDER,
      payload: res.data
    })
  );
};

export const getPreorder = () => dispatch => {
  axios.get('/api/preorder')
    .then(res =>
      dispatch({
        type: GET_PREORDER,
        payload: res.data
      })

    );
};

export const deletePreorder = id => dispatch => {
  axios.delete(`/api/preorder/${id}`).then(res =>
    dispatch({
      type: DELET_PREORDER,
      payload: id
    })
  );
};
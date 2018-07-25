import axios from 'axios';
import { GET_CATEGORY, CATEGORY_LOADING } from './types';

export const getcategory = () => dispatch => {
  dispatch(setCategoryLoading());
  axios.get('/api/category')
  .then(res =>
    dispatch({
      type: GET_CATEGORY,
      payload: res.data
    })
    
  );
};

export const setCategoryLoading = () => {
    return {
      type: CATEGORY_LOADING
    };
  };
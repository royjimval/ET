
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

// export const addItem = item => dispatch => {
//   axios.post('/api/attention', item).then(res =>
//     dispatch({
//       type: ADD_ITEM,
//       payload: res.data
//     })
//   );
// };

// export const deleteItem = id => dispatch => {
//   axios.delete(`/api/attention/${id}`).then(res =>
//     dispatch({
//       type: DELETE_ITEM,
//       payload: id
//     })
//   );
// };

export const setCategoryLoading = () => {
    return {
      type: CATEGORY_LOADING
    };
  };
import axios from 'axios';
import { ADD_PREORDER, GET_PREORDER, DELET_PREORDER, GET_PREORDER_BYTABLE } from './types';

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
export const getPreorderbytable = item => dispatch => {
  axios.get(`/api/preorder/${item}`)
    .then(res =>
      dispatch({
        type: GET_PREORDER_BYTABLE,
        payload: res.data,
      },
    console.log(res.data))

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

export const putPreorder = (id, idtable, name, ingredients, price, start, finished, delivered, noOrder) => {
  console.log(id);
  axios.put(`/api/preorder/${id}`, {
            idtable : idtable,
            name : name,
            ingredients : ingredients,
            price : price,
            sended : true,
            start : start,
            finished : finished,
            delivered : delivered,
            noOrder : noOrder,
  })
    .then(response => {
      console.log(response);
    })


};

// export const putPreorderSuccess = item => dispatch => {
//   axios.put(`/api/preorder/${item._id}`).then(res =>
//     dispatch({
//       type: PUT_PREORDER_SUCCESS,
//       payload: item._id
//     })
//   );
// };


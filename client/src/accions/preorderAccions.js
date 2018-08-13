import axios from 'axios';
import { ADD_PREORDER, ADD_DRINK, GET_PREORDER, DELET_PREORDER, GET_PREORDER_BYTABLE,GET_PREORDER_BYTABLE_WAITER, GET_PREORDER_BYTABLE_FINISHED_DELIVERED, GET_PRODUCT_CASHIER, GET_TABLE1, GET_TABLE2, GET_TABLE3, GET_TABLE4, GET_TABLE5, GET_TABLE6, GET_TABLE1_FINISHED, GET_TABLE2_FINISHED, GET_TABLE3_FINISHED, GET_TABLE4_FINISHED, GET_TABLE5_FINISHED,GET_TABLE6_FINISHED } from './types';

export const addPreorder = item => dispatch => {
  axios.post('/api/preorder', item).then(res =>
    dispatch({
      type: ADD_PREORDER,
      payload: res.data
    })
  );
};

export const addDrink = item => dispatch => {
  axios.post('/api/preorder/drink', item).then(res =>
    dispatch({
      type: ADD_DRINK,
      payload: res.data
    })
  );
};

export const getPreorder = item => dispatch => {
  axios.get(`/api/preorder/order/${item}`)
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

export const getPreorderbytableFinished = item => dispatch => {
  axios.get(`/api/preorder/finished/${item}`)
    .then(res =>
      dispatch({
        type: GET_PREORDER_BYTABLE_WAITER,
        payload: res.data,
      },
        console.log(res.data))
    );
};

export const getPreorderbytableFinishedDelivered = item => dispatch => {
  axios.get(`/api/preorder/finished/delivered/${item}`)
    .then(res =>
      dispatch({
        type: GET_PREORDER_BYTABLE_FINISHED_DELIVERED,
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

export const putDrink = (id, idtable, name, ingredients, price, start, finished, delivered, noOrder) => {
  axios.put(`/api/preorder/drink/${id}`, {
    idtable: idtable,
    name: name,
    ingredients: ingredients,
    price: price,
    sended: true,
    finished: true,
    delivered: delivered,
    noOrder: noOrder,
  })
    .then(response => {
      console.log(response);
    })
};

export const updateFinished = (item) => {
  console.log(item._id)
  axios.put(`/api/preorder/${item._id}`, {
    idtable: item.idtable,
    name: item.name,
    ingredients: item.ingredients,
    price: item.price,
    sended: item.sended,
    start: item.start,
    finished: true,
    delivered: item.delivered,
    noOrder: item.noOrder,
  })
    .then(response => {
      console.log(response);
    })
};

export const updateDelivered = (id, idtable, name, ingredients, price, sended, start, finished, noOrder) => {
  console.log(id)
  axios.put(`/api/preorder/${id}`, {
    idtable: idtable,
    name: name,
    ingredients: ingredients,
    price: price,
    sended: sended,
    start: start,
    finished: finished,
    delivered: true,
    noOrder: noOrder,
  })
    .then(response => {
      console.log(response);
    })
};

export const getProductCashier = item => dispatch => {
  axios.get(`/api/preorder/Cashier/${item}`)
    .then(res =>
      dispatch({
        type: GET_PRODUCT_CASHIER,
        payload: res.data,
      },
        console.log(res.data))
    );
};


export const get_table1 = () => dispatch => {
  const table = 1;
  axios.get(`/api/preorder/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE1,
        payload: res.data
      })

    );
};

export const get_table2 = () => dispatch => {
  const table = 2;
  axios.get(`/api/preorder/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE2,
        payload: res.data
      })

    );
};

export const get_table3 = () => dispatch => {
  const table = 3;
  axios.get(`/api/preorder/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE3,
        payload: res.data
      })

    );
};

export const get_table4 = () => dispatch => {
  const table = 4;
  axios.get(`/api/preorder/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE4,
        payload: res.data
      })

    );
};

export const get_table5 = () => dispatch => {
  const table = 5;
  axios.get(`/api/preorder/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE5,
        payload: res.data
      })

    );
};

export const get_table6 = () => dispatch => {
  const table = 6;
  axios.get(`/api/preorder/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE6,
        payload: res.data
      })

    );
};

export const get_table1_Finished = () => dispatch => {
  const table = 1;
  axios.get(`/api/preorder/finished/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE1_FINISHED,
        payload: res.data,
      },
        console.log(res.data))
    );
}; 

export const get_table2_Finished = () => dispatch => {
  const table = 2;
  axios.get(`/api/preorder/finished/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE2_FINISHED,
        payload: res.data,
      },
        console.log(res.data))
    );
};

export const get_table3_Finished = () => dispatch => {
  const table = 3;
  axios.get(`/api/preorder/finished/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE3_FINISHED,
        payload: res.data,
      },
        console.log(res.data))
    );
};

export const get_table4_Finished = () => dispatch => {
  const table = 4;
  axios.get(`/api/preorder/finished/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE4_FINISHED,
        payload: res.data,
      },
        console.log(res.data))
    );
};

export const get_table5_Finished = () => dispatch => {
  const table = 5;
  axios.get(`/api/preorder/finished/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE5_FINISHED,
        payload: res.data,
      },
        console.log(res.data))
    );
};

export const get_table6_Finished = () => dispatch => {
  const table = 6;
  axios.get(`/api/preorder/finished/${table}`)
    .then(res =>
      dispatch({
        type: GET_TABLE6_FINISHED,
        payload: res.data,
      },
        console.log(res.data))
    );
};
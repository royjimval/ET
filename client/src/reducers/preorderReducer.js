import { ADD_PREORDER, GET_PREORDER, ADD_DRINK, DELET_PREORDER, GET_PREORDER_BYTABLE_FINISHED_DELIVERED, PUT_PREORDER, GET_PREORDER_BYTABLE, GET_PRODUCT_CASHIER, GET_TABLE1, GET_TABLE2, GET_TABLE3, GET_TABLE6, GET_TABLE4, GET_TABLE5, GET_TABLE1_FINISHED, GET_TABLE2_FINISHED, GET_TABLE3_FINISHED, GET_TABLE4_FINISHED, GET_TABLE5_FINISHED, GET_TABLE6_FINISHED, GET_PREORDER_BYTABLE_WAITER } from '../accions/types';

const initialState = {
  preorder: [],
  preorderWaiter: [],
  preorderWaiterDelivered: [],
  preorderCashier: [],
  table1: [],
  table2: [],
  table3: [],
  table4: [],
  table5: [],
  table6: [],
  table1_finished: [],
  table2_finished: [],
  table3_finished: [],
  table4_finished: [],
  table5_finished: [],
  table6_finished: [],

  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_PREORDER:
      return {
        ...state,
        preorder: action.payload,
        loading: true
      };

    case GET_PREORDER_BYTABLE:
      return {
        ...state,
        preorder: action.payload,
        loading: true
      };
    case GET_PREORDER_BYTABLE_WAITER:
      return {
        ...state,
        preorderWaiter: action.payload,
        loading: true
      };
    case GET_PREORDER_BYTABLE_FINISHED_DELIVERED:
      return {
        ...state,
        preorderWaiterDelivered: action.payload,
        loading: true
      };
    case GET_PRODUCT_CASHIER:
      return {
        ...state,
        preorderCashier: action.payload,
        loading: true
      };

    case ADD_PREORDER:
      return {
        ...state,
        preorder: [action.payload, ...state.preorder]
      };
    case DELET_PREORDER:
      return {
        ...state,
        preorder: state.preorder.filter(preorder => preorder._id !== action.payload)
      };
    case PUT_PREORDER:
      return {
        ...state,
        preorder: state.preorder.filter(preorder => preorder._id !== action.payload),
      };
    case GET_TABLE1:
      return {
        ...state,
        table1: action.payload,
      };
    case GET_TABLE2:
      return {
        ...state,
        table2: action.payload,
      };
    case GET_TABLE3:
      return {
        ...state,
        table3: action.payload,
      };
    case GET_TABLE4:
      return {
        ...state,
        table4: action.payload,
      };
    case GET_TABLE5:
      return {
        ...state,
        table5: action.payload,
      };
    case GET_TABLE6:
      return {
        ...state,
        table6: action.payload,
      };
    case GET_TABLE1_FINISHED:
      return {
        ...state,
        table1_finished: action.payload,
      };
    case GET_TABLE2_FINISHED:
      return {
        ...state,
        table2_finished: action.payload,
      };
    case GET_TABLE3_FINISHED:
      return {
        ...state,
        table3_finished: action.payload,
      };
    case GET_TABLE4_FINISHED:
      return {
        ...state,
        table4_finished: action.payload,
      };
    case GET_TABLE5_FINISHED:
      return {
        ...state,
        table5_finished: action.payload,
      };
    case GET_TABLE6_FINISHED:
      return {
        ...state,
        table6_finished: action.payload,
      };
    default:
      return state;
  }
}
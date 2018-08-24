import { GET_ORDER, ORDER_LOADING, DELETE_ORDER, UPDATE_ORDER, ADD_ORDER, GET_ORDER_BY_DATE, GET_ORDER_BY_DATE_FT } from '../accions/types';

const initialState = {
  order: [],
  orderft: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        order: action.payload,
        loading: true
      };
    case GET_ORDER_BY_DATE:
      return {
        ...state,
        order: action.payload,
        loading: true
      };
    case GET_ORDER_BY_DATE_FT:
      return {
        ...state,
        orderft: action.payload,
        loading: true
      };
    case DELETE_ORDER:
      return {
        ...state,
        order: state.order.filter(order => order._id !== action.payload)
      };
    case UPDATE_ORDER:
      return {
        ...state,
        order: state.order.filter(order => order._id !== action.payload)
      };
    case ORDER_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_ORDER:
      return {
        ...state,
        order: [action.payload, ...state.order]
      };
    default:
      return state;
  }
}
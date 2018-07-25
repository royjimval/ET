import {GET_PRODUCT, PRODUCT_LOADING, ADD_PRODUCT} from '../accions/types';
  
  const initialState = {
    product: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCT:
        return {
          ...state,
          product: action.payload,
          loading: true
        };
      case ADD_PRODUCT:
      return {
        ...state,
        product: [action.payload, ...state.items]
        };
      case PRODUCT_LOADING:
      return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
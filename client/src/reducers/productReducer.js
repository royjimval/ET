import {GET_PRODUCT, PRODUCT_LOADING, ADD_PRODUCT, GET_PRODUCT_BREAKFAST, GET_PRODUCT_MEAL, GET_PRODUCT_DINNER, GET_PRODUCT_DRINK, GET_PRODUCT_DESSERT} from '../accions/types';
  
  const initialState = {
    product: [],
    breakfast: [],
    meal: [],
    dinner: [],
    drink: [],
    dessert: [],
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
      case GET_PRODUCT_BREAKFAST:
        return {
          ...state,
          breakfast: action.payload,
          loading: false
        }; 
      case GET_PRODUCT_MEAL:
        return {
          ...state,
          meal: action.payload,
          loading: false
        }; 
      case GET_PRODUCT_DINNER:
        return {
          ...state,
          dinner: action.payload,
          loading: false
        }; 
      case GET_PRODUCT_DRINK:
        return {
          ...state,
          drink: action.payload,
          loading: true
        }; 
      case GET_PRODUCT_DESSERT:
        return {
          ...state,
          dessert: action.payload,
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
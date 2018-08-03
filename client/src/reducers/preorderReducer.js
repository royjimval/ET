import { ADD_PREORDER, GET_PREORDER, DELET_PREORDER, PUT_PREORDER, GET_PREORDER_BYTABLE, GET_PRODUCT_CASHIER, GET_TABLE1, GET_TABLE2, GET_TABLE3, GET_TABLE6, GET_TABLE4, GET_TABLE5 } from '../accions/types';

const initialState = {
  preorder: [],
  table1: [],
  table2: [],
  table3: [],
  table4: [],
  table5: [],
  table6: [],
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
    case GET_PRODUCT_CASHIER:
      return {
        ...state,
        preorder: action.payload,
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
    default:
      return state;
  }
}
import {ADD_PREORDER, GET_PREORDER} from '../accions/types';
  
  const initialState = {
    preorder: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {

      case GET_PREORDER:
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
//         case DELETE_ITEM:
//         return {
//           ...state,
//           items: state.items.filter(item => item._id !== action.payload)
//   };
      default:
        return state;
    }
  }
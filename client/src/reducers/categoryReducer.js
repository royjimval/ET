import {GET_CATEGORY, CATEGORY_LOADING} from '../accions/types';
  
  const initialState = {
    category: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CATEGORY:
        return {
          ...state,
          category: action.payload,
          loading: true
        };
//         case ADD_ITEM:
//         return {
//           ...state,
//           items: [action.payload, ...state.items]
//   };
//         case DELETE_ITEM:
//         return {
//           ...state,
//           items: state.items.filter(item => item._id !== action.payload)
//   };
        case CATEGORY_LOADING:
        return {
            ...state,
            loading: true
    };
      default:
        return state;
    }
  }
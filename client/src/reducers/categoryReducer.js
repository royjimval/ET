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
        case CATEGORY_LOADING:
        return {
            ...state,
            loading: true
    };
      default:
        return state;
    }
  }
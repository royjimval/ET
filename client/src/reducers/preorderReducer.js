import { ADD_PREORDER, GET_PREORDER, DELET_PREORDER } from '../accions/types';

const initialState = {
  preorder: [],
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
    default:
      return state;
  }
}
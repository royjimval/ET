import {GET_USERS, DELETE_USER} from '../accions/types'

const initialState = {
    users:[],
    loading: false
  };

export default function(state = initialState,action){
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users: action.payload,
                loading: true
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(users => users._id !== action.payload)
            };
        
        default:
            return state;
        
    }
}

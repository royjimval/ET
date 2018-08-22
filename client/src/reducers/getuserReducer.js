import {GET_USERS} from '../accions/types'

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
        
        default:
            return state;
        
    }
}
import {GET_REGISTER_RIGHT} from '../accions/types'
const initialState = {};

export default function(state = initialState,action){
    switch(action.type){
        case GET_REGISTER_RIGHT:{
            return(action.payload)
        }
        default:{
            return state;
        }
    }
}
import axios from 'axios';
import { ITEMS_LOADING,GET_USERS } from './types'

//Action to get users
export const getUsers = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/user/allUser')
        .then(res => {
            dispatch(
                {
                    type: GET_USERS,
                    payload: res.data,
                }
                
            )
        console.log("from accions " + res.data)}

        );
};

export const setItemsLoading = () => {
    return {
      type: ITEMS_LOADING
    };
  };
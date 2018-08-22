import axios from 'axios';
import { GET_ERRORS, GET_REGISTER_RIGHT, SET_CURRENT_USER} from './types'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

//Actions to register a user
export const registerUser = userData => dispatch => {
    axios
        .post('api/user/register', userData)
        .then(res =>
            dispatch({
                type: GET_REGISTER_RIGHT,
                payload: 'all Right'
            })
        )
        .catch(err => {
            dispatch({
                type: GET_REGISTER_RIGHT,
                payload: 'Not Right'
            })
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        );
}

//action to make a Token for a user
export const loginUser = (userData) => dispatch =>{
    axios
        .post('api/user/login',userData)
        .then(res=>{
            //save to localStorage
            const {token} = res.data;
            //set token to localStorage
            localStorage.setItem('jwtToken', token);
            //set token to auth header
            setAuthToken(token);
            // decode token to get user data
            const decoded = jwt_decode(token)
            //set current user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

//Set logged in user
export const setCurrentUser= (decoded) =>{
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
}
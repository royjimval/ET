import axios from 'axios';
import { GET_ID_ORDER } from './types';

export const get_id_order = () => dispatch => {
    axios.get(`/api/id_order`)
        .then(res =>
            dispatch({
                type: GET_ID_ORDER,
                payload: res.data
            })

        );
};

export const updateId_order = (id, order) => {
    axios.put(`/api/id_order/${id}`, {
order:order
    })
        .then(response => {
            console.log(response);
        })


};
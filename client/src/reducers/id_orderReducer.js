import { GET_ID_ORDER } from '../accions/types';

const initialState = {
    id_order: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ID_ORDER:
            return {
                ...state,
                id_order: action.payload,
            };

        default:
            return state;
    }
}
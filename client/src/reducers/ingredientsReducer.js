import { GET_INGREDIENTS } from '../accions/types';

const initialState = {
    ingredients: [],
    loading: false

};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload,
                loading: true

            };

        default:
            return state;
    }
}
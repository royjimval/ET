import { GET_INGREDIENTS, POST_INGREDIENTS, GET_INGREDIENTS_ID } from '../accions/types';

const initialState = {
    ingredients: [],
    ingredientid: [],
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
        case GET_INGREDIENTS_ID:
            return {
                ...state,
                ingredientid: action.payload,
                loading: true

            };
        case POST_INGREDIENTS:
            return {
                ...state,
                ingredients: [action.payload, ...state.ingredients]
            };

        default:
            return state;
    }
}
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import orderReducer from './orderReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import preorderReducer from './preorderReducer';
import id_orderReducer from './id_orderReducer';
import ingredientReducer from './ingredientsReducer';

export default combineReducers({
  item: itemReducer,
  order : orderReducer,
  product : productReducer,
  category : categoryReducer,
  preorder : preorderReducer,
  id_order: id_orderReducer,
  ingredients: ingredientReducer
});
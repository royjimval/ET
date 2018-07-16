import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import orderReducer from './orderReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer'

export default combineReducers({
  item: itemReducer,
  order : orderReducer,
  product : productReducer,
  category : categoryReducer
});
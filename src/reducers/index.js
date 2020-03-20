import { combineReducers } from 'redux';
import login from './login/login';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  login
})
export default createRootReducer
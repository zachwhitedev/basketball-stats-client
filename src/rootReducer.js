import { combineReducers } from 'redux';
import registerUserReducer from './components/RegisterPage/RegisterUser/registerUserReducer';
import loginPageReducer from './components/LoginPage/loginPageReducer';

const rootReducer = combineReducers({
  registerUser: registerUserReducer,
  loginPage: loginPageReducer
});

export default rootReducer;
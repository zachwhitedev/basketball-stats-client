import { combineReducers } from 'redux';
import registerUserReducer from './components/RegisterPage/RegisterUser/registerUserReducer';
import loginPageReducer from './components/LoginPage/loginPageReducer';
import userDashbaordReducer from './dashboards/UserDashboard/userDashboardReducer';

const rootReducer = combineReducers({
  registerUser: registerUserReducer,
  loginPage: loginPageReducer,
  userDashboard: userDashbaordReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import registerUserReducer from './components/RegisterPage/RegisterUser/registerUserReducer';
import loginPageReducer from './components/LoginPage/loginPageReducer';
import userDashboardReducer from './dashboards/UserDashboard/userDashboardReducer';
import modalReducer from './modals/modalReducer';
import activeGameCardReducer from './dashboards/GameActive/Cards/cardReducer';

const rootReducer = combineReducers({
  registerUser: registerUserReducer,
  loginPage: loginPageReducer,
  userDashboard: userDashboardReducer,
  modals: modalReducer,
  activeGameCards: activeGameCardReducer
});

export default rootReducer;
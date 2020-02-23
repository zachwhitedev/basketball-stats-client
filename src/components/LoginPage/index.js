import { connect } from 'react-redux';
import LoginPage from './LoginPage';

function mapStoreToProps(store) {
  return {
    user: store.loginPage.userData,
    loginError: store.loginPage.errorString
  };
}
export default connect(mapStoreToProps)(LoginPage);
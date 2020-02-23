import { connect } from 'react-redux';
import RegisterUser from './RegisterUser';

function mapStoreToProps(store) {
  return {
    user: store.userData,
    registerError: store.registerUser.errorString
  };
}
export default connect(mapStoreToProps)(RegisterUser);
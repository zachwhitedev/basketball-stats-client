import { connect } from 'react-redux';
import RegisterPage from './RegisterPage';

function mapStoreToProps(store) {
  return {
    userData: store
  };
}
export default connect(mapStoreToProps)(RegisterPage);
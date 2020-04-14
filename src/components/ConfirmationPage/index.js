import { connect } from 'react-redux';
import ConfirmationPage from './ConfirmationPage';

function mapStoreToProps(store) {
  return {
    userData: store.userData
  };
}
export default connect(mapStoreToProps)(ConfirmationPage);
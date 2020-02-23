import { connect } from 'react-redux';
import ConfirmationPage from './ConfirmationPage';

function mapStoreToProps(store) {
  return {
    // userEmail: store.seriesFeed.allContent
    // userId: store.userDashboard
    userData: store.userData
  };
}
export default connect(mapStoreToProps)(ConfirmationPage);
import { connect } from 'react-redux';
import SupportPage from './SupportPage';

function mapStoreToProps(store) {
  return {
    // userEmail: store.seriesFeed.allContent
    // userId: store.userDashboard
    userData: store.userData
  };
}
export default connect(mapStoreToProps)(SupportPage);
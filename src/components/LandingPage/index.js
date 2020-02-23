import { connect } from 'react-redux';
import LandingPage from './LandingPage';

function mapStoreToProps(store) {
  return {
    // userEmail: store.seriesFeed.allContent
    // userId: store.userDashboard
    userData: store.userData
  };
}
export default connect(mapStoreToProps)(LandingPage);
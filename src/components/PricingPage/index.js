import { connect } from 'react-redux';
import PricingPage from './PricingPage';

function mapStoreToProps(store) {
  return {
    // userEmail: store.seriesFeed.allContent
    // userId: store.userDashboard
    userData: store.userData
  };
}
export default connect(mapStoreToProps)(PricingPage);
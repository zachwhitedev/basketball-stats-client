import { connect } from 'react-redux';
import RegisterTeam from './RegisterTeam';

function mapStoreToProps(store) {
  return {
    // userEmail: store.seriesFeed.allContent
    // userId: store.userDashboard
    userData: store.userData
  };
}
export default connect(mapStoreToProps)(RegisterTeam);
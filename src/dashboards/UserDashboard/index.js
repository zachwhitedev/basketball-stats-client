import { connect } from 'react-redux';
import UserDashboard from './UserDashboard';

function mapStoreToProps(store) {
  return {
    userData: store.loginPage.userData
  };
}
export default connect(mapStoreToProps)(UserDashboard);
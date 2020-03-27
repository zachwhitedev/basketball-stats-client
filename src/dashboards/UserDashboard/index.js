import { connect } from 'react-redux';
import UserDashboard from './UserDashboard';

function mapStoreToProps(store) {
  return {
    teams: store.userDashboard.teams.data.teamdata
  };
}
export default connect(mapStoreToProps)(UserDashboard);
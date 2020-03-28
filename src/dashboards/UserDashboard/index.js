import { connect } from 'react-redux';
import UserDashboard from './UserDashboard';

function mapStoreToProps(store) {
  return {
    teams: store.userDashboard.data.teams,
    players: store.userDashboard.data.players
  };
}
export default connect(mapStoreToProps)(UserDashboard);
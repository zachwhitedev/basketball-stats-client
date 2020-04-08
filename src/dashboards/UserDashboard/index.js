import { connect } from 'react-redux';
import UserDashboard from './UserDashboard';

function mapStoreToProps(store) {
  
  return {
    teams: store.userDashboard.data.teams,
    players: store.userDashboard.data.players,
    selectedTeam: store.userDashboard.selectedTeam
  };
}
export default connect(mapStoreToProps)(UserDashboard);
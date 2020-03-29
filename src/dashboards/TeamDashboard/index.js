import { connect } from 'react-redux';
import TeamDashboard from './TeamDashboard';

function mapStoreToProps(store) {
  return {
    selectedTeam: store.userDashboard.selectedTeam,
    players: store.userDashboard.selectedTeam.players
  };
}
export default connect(mapStoreToProps)(TeamDashboard);
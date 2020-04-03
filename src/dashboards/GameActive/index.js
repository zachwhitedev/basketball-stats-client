import { connect } from 'react-redux';
import GameActive from './GameActive';

function mapStoreToProps(store) {
  return {
    selectedTeam: store.userDashboard.selectedTeam,
    players: store.userDashboard.selectedTeam.players
  };
}
export default connect(mapStoreToProps)(GameActive);
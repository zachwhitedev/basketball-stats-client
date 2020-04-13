import { connect } from 'react-redux';
import GameActive from './GameActive';

function mapStoreToProps(store) {
  return {
    game: store.userDashboard.currentGame,
    players: store.userDashboard.selectedTeam.players,
    team: store.userDashboard.selectedTeam
  };
}
export default connect(mapStoreToProps)(GameActive);
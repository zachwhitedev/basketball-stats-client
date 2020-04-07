import { connect } from 'react-redux';
import GameActive from './GameActive';

function mapStoreToProps(store) {
  return {
    game: store.userDashboard.currentGame,
    players: store.userDashboard.selectedTeam.players
  };
}
export default connect(mapStoreToProps)(GameActive);
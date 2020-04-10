import { connect } from 'react-redux';
import PlayersCard from './PlayersCard';

function mapStoreToProps(store) {
  return {
    game: store.userDashboard.currentGame,
    team: store.userDashboard.selectedTeam,
    playergame: store.activeGameCards.playerGameData,
    tempEvent: store.activeGameCards.tempEvent
  };
}

export default connect(mapStoreToProps)(PlayersCard);
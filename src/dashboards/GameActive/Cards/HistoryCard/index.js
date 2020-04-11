import { connect } from 'react-redux';
import HistoryCard from './HistoryCard';

function mapStoreToProps(store) {
  return {
    game: store.userDashboard.currentGame,
    players: store.userDashboard.selectedTeam.players,
    tempEvent: store.activeGameCards.tempEvent
  };
}
export default connect(mapStoreToProps)(HistoryCard);
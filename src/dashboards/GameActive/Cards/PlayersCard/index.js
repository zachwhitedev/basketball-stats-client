import { connect } from 'react-redux';
import PlayersCard from './PlayersCard';

function mapStoreToProps(store) {
  return {
    game: store.userDashboard.currentGame,
    team: store.userDashboard.selectedTeam
  };
}

export default connect(mapStoreToProps)(PlayersCard);
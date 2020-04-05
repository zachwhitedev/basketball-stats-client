import { connect } from 'react-redux';
import GamesCard from './GamesCard';

function mapStoreToProps(store) {
  return {
    selectedTeam: store.userDashboard.selectedTeam,
    games: store.userDashboard.selectedTeam.games,
  };
}
export default connect(mapStoreToProps)(GamesCard);
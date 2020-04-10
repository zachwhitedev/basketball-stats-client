import { connect } from 'react-redux';
import EventsCard from './EventsCard';

function mapStoreToProps(store) {
  return {
    game: store.userDashboard.currentGame,
    team: store.userDashboard.selectedTeam
  };
}

export default connect(mapStoreToProps)(EventsCard);

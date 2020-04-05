import { connect } from 'react-redux';
import GameListItem from './GameListItem';

function mapStoreToProps(store) {
  return {
    selectedTeam: store.userDashboard.selectedTeam
  };
}
export default connect(mapStoreToProps)(GameListItem);
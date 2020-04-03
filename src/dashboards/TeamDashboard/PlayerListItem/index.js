import { connect } from 'react-redux';
import PlayerListItem from './PlayerListItem';

function mapStoreToProps(store) {
  return {
    selectedTeam: store.userDashboard.selectedTeam
  };
}
export default connect(mapStoreToProps)(PlayerListItem);
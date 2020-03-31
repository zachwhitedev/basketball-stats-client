import { connect } from 'react-redux';
import AddPlayersModal from './AddPlayersModal';

function mapStoreToProps(store) {
  return {
    team: store.userDashboard.selectedTeam
  };
}
export default connect(mapStoreToProps)(AddPlayersModal);
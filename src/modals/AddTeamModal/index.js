import { connect } from 'react-redux';
import AddTeamModal from './AddTeamModal';

function mapStoreToProps(store) {
  return {
    addTeam: store.modals.teamAdded
  };
}
export default connect(mapStoreToProps)(AddTeamModal);
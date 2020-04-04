import { connect } from 'react-redux';
import AddTeamModal from './AddTeamModal';
import { selectTeam } from '../../dashboards/UserDashboard/userDashboardActions';

function mapStoreToProps(store) {
  return {
    addTeam: store.modals.teamAdded
  };
}
export default connect(mapStoreToProps)(AddTeamModal);
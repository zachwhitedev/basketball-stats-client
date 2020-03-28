import { connect } from 'react-redux';
import TeamDashboard from './TeamDashboard';

function mapStoreToProps(store) {
  return {
    selectedTeam: store.userDashboard.selectedTeam
  };
}
export default connect(mapStoreToProps)(TeamDashboard);
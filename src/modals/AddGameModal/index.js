import { connect } from 'react-redux';
import AddGameModal from './AddGameModal';

function mapStoreToProps(store) {
  return {
    selectedTeam: store.userDashboard.selectedTeam
  };
}
export default connect(mapStoreToProps)(AddGameModal);

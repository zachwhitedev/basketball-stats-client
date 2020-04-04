import { connect } from 'react-redux';
import AddGameModal from './AddGameModal';

function mapStoreToProps(store) {
  return {
    addTeam: store.modals.teamAdded
  };
}
export default connect(mapStoreToProps)(AddGameModal);

import { connect } from 'react-redux';
import SupportPage from './SupportPage';

function mapStoreToProps(store) {
  return {
    userData: store
  };
}
export default connect(mapStoreToProps)(SupportPage);
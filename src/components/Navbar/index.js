import { connect } from 'react-redux';
import Navbar from './Navbar';

function mapStoreToProps(store) {
  return {
    userData: store
  };
}
export default connect(mapStoreToProps)(Navbar);
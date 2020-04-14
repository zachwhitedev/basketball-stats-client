import { connect } from 'react-redux';
import LandingPage from './LandingPage';

function mapStoreToProps(store) {
  return {
    userData: store
  };
}
export default connect(mapStoreToProps)(LandingPage);
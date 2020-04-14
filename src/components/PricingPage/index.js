import { connect } from 'react-redux';
import PricingPage from './PricingPage';

function mapStoreToProps(store) {
  return {
    userData: store
  };
}
export default connect(mapStoreToProps)(PricingPage);
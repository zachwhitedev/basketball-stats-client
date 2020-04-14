import { connect } from 'react-redux';
import RegisterTeam from './RegisterTeam';

function mapStoreToProps(store) {
  return {
    userData: store
  };
}
export default connect(mapStoreToProps)(RegisterTeam);
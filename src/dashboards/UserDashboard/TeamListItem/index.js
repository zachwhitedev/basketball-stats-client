import { connect } from 'react-redux';
import TeamListItem from './TeamListItem';

function mapStoreToProps(store) {
  return {
    test: 'testy poo'
  };
}
export default connect(mapStoreToProps)(TeamListItem);
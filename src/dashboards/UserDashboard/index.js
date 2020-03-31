import { connect } from 'react-redux';
import UserDashboard from './UserDashboard';

function mapStoreToProps(store) {
  let teams;
  let players;
  if(!store.userDashboard.data){
    teams = [];
    players =[];
  } else {
    teams = store.userDashboard.data.teams;
    players = store.userDashboard.data.players
  }

  return {
    teams: teams,
    players: players
  };
}
export default connect(mapStoreToProps)(UserDashboard);
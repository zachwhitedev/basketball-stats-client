import { getUserData } from '../dashboards/UserDashboard/userDashboardActions';

const axios = require('axios');

// export function addNewTeam(newTeam) {
//   return {
//     type: 'ADD_NEW_TEAM',
//     payload: axios.post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/addteam', newTeam)
//   };
// }

export function addNewTeamHelper(team) {
  return {
    type: 'ADD_NEW_TEAM',
    payload: team
  };
}

export function addNewTeam(userid, newTeam) {
  return dispatch => {
    axios
      .post(
        'https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/addteam',
        newTeam
      )
      .then(team => {
        dispatch(addNewTeamHelper(team));
        return team;
      })
      .then(() => {
        dispatch(getUserData(userid));
      })
      .catch(err => console.log(err));
  };
}

export function addNewPlayersHelper(newPlayers) {
  return {
    type: 'ADD_NEW_PLAYERS',
    payload: newPlayers
  };
}

export function addNewPlayers(userid, newPlayers) {
  return dispatch => {
    axios
      .post(
        'https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/addplayers',
        newPlayers
      )
      .then(players => {
        dispatch(addNewPlayersHelper(players));
        return players;
      })
      .then(players => dispatch(getUserData(userid)))
      .catch(err => console.log(err));
  };
}

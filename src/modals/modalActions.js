// put all actions here eventually

const axios = require('axios');

export function addNewTeam(newTeam) {
  return {
    type: 'ADD_NEW_TEAM',
    payload: axios.post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/addteam', newTeam)
  };
}

export function addNewPlayers(newPlayers) {
  return {
    type: 'ADD_NEW_PLAYERS',
    payload: axios.post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/addplayers', newPlayers)
  };
}
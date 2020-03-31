const axios = require('axios');

export function addNewTeam(newTeam) {
  return {
    type: 'GET_USER_DATA',
    payload: axios.post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/addteam', newTeam)
  };
}

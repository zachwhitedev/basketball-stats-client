const axios = require('axios');

export function getUserData(id) {
  return {
    type: 'GET_USER_DATA',
    payload: axios.get(`https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/getdata/${id}`)
  };
}

export function selectTeam(team) {
  return {
    type: 'SELECT_TEAM',
    payload: team
  };
}

export function getTeam(userid, teamid){
  const teamRequest = {
    userid: userid,
    teamid: teamid
  }
  return {
    type: 'GET_USER_DATA',
    payload: axios.get(`https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/getteam`, teamRequest) // lambda doesn't exist yet
  };
}
const axios = require('axios');

export function getUserData(id) {
  return {
    type: 'GET_USER_DATA',
    payload: axios.get(
      `https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/getdata/${id}`
    )
  };
}

export function selectTeam(team) {
  return {
    type: 'SELECT_TEAM',
    payload: team
  };
}

export function getCurrentTeam(userid, teamid) {
  const teamRequest = {
    userid: userid,
    teamid: teamid
  };
  return {
    type: 'GET_CURRENT_TEAM',
    payload: axios.post(
      'https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/getteam',
      teamRequest
    )
  };
}

export function deleteTeam(userid, teamid) {
  const teamRequest = {
    userid: userid,
    teamid: teamid
  };
  return {
    type: 'DELETE_TEAM',
    payload: axios.post(
      'https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/deleteteam',
      teamRequest
    )
  };
}
export function deletePlayer(userid, teamid, playerid) {
  const deletePlayerRequest = {
    userid: userid,
    teamid: teamid,
    playerid: playerid
  };
  return {
    type: 'DELETE_PLAYER',
    payload: axios.post(
      'https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/deleteplayer',
      deletePlayerRequest
    )
  };
}

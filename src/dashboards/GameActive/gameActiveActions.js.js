import { getUserData, getCurrentGame } from '../UserDashboard/userDashboardActions';
import jwt_decode from 'jwt-decode';

const axios = require('axios');

function tempGameEvent(gameEvent){
  return {
    type: 'ADD_TEMP_GAME_EVENT',
    payload: gameEvent
  }
}

export function clearTempEvent(){
  return {
    type: 'CLEAR_TEMP_GAME_EVENT'
  }
}

export function addGameEvent(playerid, gameid, teamid, eventid) {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const userid = decoded.userid;
    return dispatch => {
    const gameEvent = {
        playerid: playerid,
        gameid: gameid,
        teamid: teamid,
        eventid: eventid
    }
    dispatch(tempGameEvent(gameEvent));
    axios
      .post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/addevent', gameEvent)
      .then(() => {
        dispatch(getUserData(userid));
        dispatch(getCurrentGame(userid, teamid, gameid));
      })
      .catch(err => console.log(err));
  };
}
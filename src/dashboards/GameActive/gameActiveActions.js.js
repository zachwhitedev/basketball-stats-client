import {
  getUserData,
  getCurrentGame,
} from '../UserDashboard/userDashboardActions';
import { getPlayerGame } from './Cards/cardActions';
import jwt_decode from 'jwt-decode';

const axios = require('axios');

export function tempGameEvent(gameEvent) {
  return {
    type: 'ADD_TEMP_GAME_EVENT',
    payload: gameEvent,
  };
}

export function clearTempEvent() {
  return {
    type: 'CLEAR_TEMP_GAME_EVENT',
  };
}

export function addGameEvent(playerid, gameid, teamid, eventid) {
  const decoded = jwt_decode(localStorage.getItem('token'));
  const userid = decoded.userid;
  return (dispatch) => {
    const gameEvent = {
      playerid: playerid,
      gameid: gameid,
      teamid: teamid,
      eventid: eventid,
    };
    dispatch(tempGameEvent(gameEvent));
    axios
      .post(
        'https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/addevent',
        gameEvent
      )
      .then((res) => {
        const decoded = jwt_decode(localStorage.getItem('token'));
        dispatch(getCurrentGame(decoded.userid, teamid, gameid));
        dispatch(getPlayerGame(gameid, teamid));
      })
      .catch((err) => console.log(err));
  };
}

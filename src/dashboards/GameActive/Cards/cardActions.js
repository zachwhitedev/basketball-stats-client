import { getUserData, getCurrentGame } from '../../UserDashboard/userDashboardActions';
import { clearTempEvent } from '../gameActiveActions.js';
import jwt_decode from 'jwt-decode';

const axios = require('axios');


export function getPlayerGameHelper(gamedata){
  return {
    type: 'GET_PLAYERGAME_DATA',
    payload: gamedata
  };
}

export function getPlayerGame(gameid, teamid) {
  return dispatch => {
    const playerGameReq = {
      gameid: gameid,
      teamid: teamid
    }
    axios
    .post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/getplayergame', playerGameReq)
    .then(gamedata => {
      dispatch(getPlayerGameHelper(gamedata));
      dispatch(clearTempEvent()); 
      })
      .catch(err => console.log(err));
  };
}

export function undoGameEvent(evnt) {
  const copy = evnt;
  copy.eventid -= 12;
  return dispatch => {
    axios
      .post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/undogameevent', copy)
      .then(data => dispatch(getPlayerGame(evnt.gameid, evnt.teamid)))
      .catch(err => console.log(err))
  };
}
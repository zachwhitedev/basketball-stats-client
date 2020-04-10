import { getUserData, getCurrentGame } from '../../UserDashboard/userDashboardActions';
import jwt_decode from 'jwt-decode';

const axios = require('axios');


export function getPlayerGameHelper(data){
  return {
    type: 'GET_PLAYERGAME_DATA',
    payload: data
  };
}

export function getPlayerGame(gameid, teamid) {
  const decoded = jwt_decode(localStorage.getItem('token'));
  const userid = decoded.userid;
  return dispatch => {
    const playerGameReq = {
        gameid: gameid,
        teamid: teamid
    }
    axios
      .get('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/getplayergame', playerGameReq)
      .then(data => {
        dispatch(getPlayerGameHelper(data))
        dispatch(getUserData(userid));
        dispatch(getCurrentGame(userid, teamid, gameid));
      })
      .catch(err => console.log(err));
  };
}
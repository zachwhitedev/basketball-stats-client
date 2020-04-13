import React, { useEffect } from 'react';
import './BoxScore.css';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { getCurrentGame } from '../../../UserDashboard/userDashboardActions';

export default function BoxScore(props) {
  const { game, team, dispatch } = props;

  useEffect(() => {
    console.log('useEffect, BoxScore.js');
  }, []);

  const changeScore = (scoreType) => {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const userid = decoded.userid;
    const gameid = game.game_id;
    const teamid = team.id; 
    const scoreReq = {
      userid: userid,
      gameid: gameid,
      teamid: teamid,
      scoretype: scoreType
    }
    axios.post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/changescore', scoreReq)
      .then(res => {
        dispatch(getCurrentGame(userid, teamid, gameid))
      })
      .catch(err => console.log('changescore err', err));
  }

  if (game) {
    return (
      <div id='gameactive-titlecard'>
        <div id='gameactive-titlecard-items'>
          <div id='teamscore-increment'>
            <div id='increment-score-btn' onClick={() => changeScore(1)}>+</div>
            <div id='decrement-score-btn' onClick={() => changeScore(2)}>-</div>
          </div>
          <div>
            <h3>Game: {game.game_name}</h3>
            <h4>
              {game.teamscore} - {game.oppscore}
            </h4>
          </div>
          <div id='oppscore-increment'>
            <div id='increment-score-btn' onClick={() => changeScore(3)}>+</div>
            <div id='decrement-score-btn' onClick={() => changeScore(4)}>-</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id='gameactive-titlecard'>
        <h2>Loading...</h2>
      </div>
    );
  }
}

import React, { useEffect, useState } from 'react';
import './GameActive.css';
import Navbar from '../../components/Navbar/index';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { getCurrentGame, getCurrentTeam } from '../UserDashboard/userDashboardActions';

export default function GameActive(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    stuff: 'stuff',
  });

  useEffect(() => {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const userid = decoded.userid;

    const pathsArray = window.location.pathname.split('/');
    const teamid = pathsArray[2];
    const gameid = pathsArray[3];
    dispatch(getCurrentGame(userid, teamid, gameid));
    dispatch(getCurrentTeam(userid, teamid));
  }, []);

  if (true) {
    return (
      <div id='gameactive-container'>
        <Navbar />
        <div id='gameactive-content'>
    <div id='gameactive-items'>{props.game ? props.game.game_name : ''}</div>
          <p>{props.game ? props.game.teamscore : ''}</p>
        </div>
      </div>
    );
  } else
    return (
      <div id='gameactive-container'>
        <div id='gameactive-content'>
          <Navbar />
          <p>Loading...</p>
        </div>
      </div>
    );
}

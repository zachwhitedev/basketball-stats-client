import React, { useEffect, useState } from 'react';
import './GameActive.css';
import Navbar from '../../components/Navbar/index';

import EventsCard from './Cards/EventsCard/EventsCard';
import PlayersCard from './Cards/PlayersCard/PlayersCard';

import jwt_decode from 'jwt-decode';
import {
  getCurrentGame,
  getCurrentTeam,
} from '../UserDashboard/userDashboardActions';

export default function GameActive(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    selectedPlayerId: '',
    selectedEventId: '',
  });

  const selectPlayer = (id) => {
    setState({
      ...state,
      selectedPlayerId: id,
    });
  };
  const selectEvent = (id) => {
    if (state.selectedPlayerId) {
      // dispatch addGameEvent here
      setState({
        ...state,
        selectedEventId: id,
      });
    } else {
      alert('Please select a player first.');
    }
  };

  useEffect(() => {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const userid = decoded.userid;

    const pathsArray = window.location.pathname.split('/');
    const teamid = pathsArray[2];
    const gameid = pathsArray[3];
    dispatch(getCurrentGame(userid, teamid, gameid));
    dispatch(getCurrentTeam(userid, teamid));
  }, []);

  if (props.game && props.players) {
    return (
      <div id='gameactive-container'>
        <Navbar />
        <div id='gameactive-title-card'>
          <h1>Game: {props.game.game_name}</h1>
          <p>{props.game.teamscore + ' | ' + props.game.oppscore} </p>
        </div>
        <div id='gameactive-players-events-history-container'>
          <PlayersCard
            state={state}
            selectPlayer={selectPlayer}
            players={props.players}
          />
          <EventsCard state={state} selectEvent={selectEvent} />
          <div id='gameactive-eventlog-card' className='gameactive-card'>
            <h3>Event Log</h3>
          </div>
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

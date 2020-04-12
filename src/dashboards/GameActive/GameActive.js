import React, { useEffect, useState } from 'react';
import './GameActive.css';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar/index';

import PlayersCard from './Cards/PlayersCard/index';
import EventsCard from './Cards/EventsCard/index';
import HistoryCard from './Cards/HistoryCard/index';
import SidebarButtons from './Cards/SidebarButtons/SidebarButtons';
import BoxScore from './Cards/BoxScore/BoxScore';

import jwt_decode from 'jwt-decode';
import {
  getCurrentGame,
  getCurrentTeam,
} from '../UserDashboard/userDashboardActions';

export default function GameActive(props) {
  const { dispatch, game, players } = props;

  const [state, setState] = useState({
    selectedPlayerId: '',
    selectedEventId: '',
  });

  const selectPlayer = (id) => {
    if (state.selectedPlayerId == id) {
      setState({
        ...state,
        selectedPlayerId: '',
      });
    } else {
      setState({
        ...state,
        selectedPlayerId: id,
      });
    }
  };
  const selectEvent = (id) => {
    if (state.selectedEventId == id) {
      setState({
        ...state,
        selectedEventId: '',
      });
    } else {
      setState({
        ...state,
        selectedEventId: id,
      });
    }
  };

  const clearEvent = () => {
    setState({
      ...state,
      selectedEventId: '',
    });
  };

  useEffect(() => {
    console.log('useEffect, GameActive.js')
    const decoded = jwt_decode(localStorage.getItem('token'));
    const userid = decoded.userid;

    const pathsArray = window.location.pathname.split('/');
    const teamid = pathsArray[2];
    const gameid = pathsArray[3];
    dispatch(getCurrentGame(userid, teamid, gameid));
    dispatch(getCurrentTeam(userid, teamid));
  }, []);

  if (game && players) {
    return (
      <div id='gameactive-container'>
        {/* <Navbar /> */}
        <div id='gameactive-sidebar'>
          <SidebarButtons />
        </div>
        <div id='gameactive-not-sidebar'>
          <BoxScore game={game}/>
          <div id='gameactive-players-events-history-container'>
            <PlayersCard
              state={state}
              selectPlayer={selectPlayer}
              players={players}
            />
            <div id='gameactive-events-and-history'>
              <EventsCard
                state={state}
                selectEvent={selectEvent}
                clearEvent={clearEvent}
              />
              <HistoryCard />
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div id='gameactive-container'>
        <Navbar />
        <div id='gameactive-loading-card'>
          <p>Loading...</p>
        </div>
      </div>
    );
}

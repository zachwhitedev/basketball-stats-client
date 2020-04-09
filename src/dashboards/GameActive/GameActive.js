import React, { useEffect, useState } from 'react';
import './GameActive.css';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar/index';

import PlayersCard from './Cards/PlayersCard/PlayersCard';
import EventsCard from './Cards/EventsCard/EventsCard';
import HistoryCard from './Cards/HistoryCard/HistoryCard';
import TitleCard from './Cards/TitleCard/TitleCard';

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
      selectedPlayerId: '',
      selectedEventId: '',
    });
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
        {/* <Navbar /> */}
        <div id='gameactive-sidebar'>
          <TitleCard />
        </div>
        <div id='gameactive-not-sidebar'>
          <div id='gameactive-titlecard'>
            <h3>Game Title</h3>
            <h4>82 - 77</h4>
          </div>
          <div id='gameactive-players-events-history-container'>
            <PlayersCard
              state={state}
              selectPlayer={selectPlayer}
              players={props.players}
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

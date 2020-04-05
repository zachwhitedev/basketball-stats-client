import React, { useEffect, useState } from 'react';
import './TeamDashboard.css';
import Navbar from '../../components/Navbar/index';
import AddPlayersModal from '../../modals/AddPlayersModal/index';
import PlayerListItem from './PlayerListItem/index';
import GamesCard from './GamesCard/index';
import AddGameModal from '../../modals/AddGameModal/index';
import jwt_decode from 'jwt-decode';

import {
  getCurrentTeam,
  getUserData
} from '../UserDashboard/userDashboardActions';

export default function TeamDashboard(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    loading: true,
    addingPlayers: false,
    addingGame: false,
    token: localStorage.getItem('token')
  });
  const [teamName, setTeamName] = useState('Team'); // keeps teamname from disappearing when re-loading players

  const changeModalPlayers = () => {
    if (props.players.length >= 6) {
      alert(
        'Free account limit exceeded. Upgrade to add up to 30 players per team.'
      );
      return;
    }
    const pathsArray = window.location.pathname.split('/');
    const teamId = pathsArray[3];
    const decoded = jwt_decode(state.token);
    const userid = decoded.userid;
    dispatch(getCurrentTeam(userid, teamId));
    setTimeout(() => {
      dispatch(getCurrentTeam(userid, teamId));
    }, 1200);
    
    setState({
      ...state,
      addingPlayers: !state.addingPlayers
    });
  };
  const changeModalGames = () => {
    const pathsArray = window.location.pathname.split('/');
    const teamId = pathsArray[3];
    const decoded = jwt_decode(state.token);
    const userid = decoded.userid;
    dispatch(getCurrentTeam(userid, teamId));
    setTimeout(() => {
      dispatch(getCurrentTeam(userid, teamId));
    }, 1200);
    setState({
      ...state,
      addingGame: !state.addingGame
    });
  };

  useEffect(() => {
    console.log('useEffect, TeamDashboard,js, line 23');
    setTeamName(props.selectedTeam.name);
    const decoded = jwt_decode(state.token);
    const userid = decoded.userid;
    dispatch(getUserData(userid));

    const pathsArray = window.location.pathname.split('/');
    const teamId = pathsArray[3];
    dispatch(getCurrentTeam(userid, teamId));
  }, [props.selectedTeam.id]);

  if (props.selectedTeam.fetched) {
    return (
      <div id='team-dashboard-container'>
        <Navbar />
        {state.addingPlayers && <AddPlayersModal changeModal={changeModalPlayers} />}
        {state.addingGame && <AddGameModal changeModal={changeModalGames} />}
        <div id='team-dashboard-content'>
          <div id='team-dashboard-addplayers-btn' onClick={() => changeModalPlayers()}>
            Add Players
          </div>
          <div id='team-dashboard-items'>
            <p>
              <h2>{teamName} Roster</h2>
            </p>
          </div>
          {props.players &&
            props.players.sort((a, b) => a.lastname.localeCompare(b.firstname)).map(player => {
              return (
                <PlayerListItem
                  id={player.id}
                  firstname={player.firstname}
                  lastname={player.lastname}
                  jersey={player.jersey}
                  teamid={props.selectedTeam.id}
                />
              );
            })}
        </div>
        <GamesCard changeModal={changeModalGames}/>
      </div>
    );
  } else
    return (
      <div id='team-dashboard-container'>
        <div id='team-dashboard-content'>
          <Navbar />
          <p>Loading...</p>
        </div>
      </div>
    );
}

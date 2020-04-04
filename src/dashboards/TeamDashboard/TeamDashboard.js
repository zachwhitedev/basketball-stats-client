import React, { useEffect, useState } from 'react';
import './TeamDashboard.css';
import Navbar from '../../components/Navbar/index';
import AddPlayersModal from '../../modals/AddPlayersModal/index';
import PlayerListItem from './PlayerListItem/index';
import GamesCard from './GamesCard/GamesCard';
import { Link } from 'react-router-dom';
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
    token: localStorage.getItem('token')
  });

  const changeModal = () => {
    const pathsArray = window.location.pathname.split('/');
    const teamId = pathsArray[3];
    const decoded = jwt_decode(state.token);
    const userid = decoded.userid;
    dispatch(getCurrentTeam(userid, teamId));
    setTimeout(() => {dispatch(getCurrentTeam(userid, teamId))}, 1200);

    setState({
      ...state,
      addingPlayers: !state.addingPlayers
    });
  };

  useEffect(() => {
    console.log('useEffect, TeamDashboard,js, line 23');
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
        {state.addingPlayers && <AddPlayersModal changeModal={changeModal} />}
        <div id='team-dashboard-content'>
          <div id='team-dashboard-addplayers-btn' onClick={() => changeModal()}>
            Add Players
          </div>
          <div id='team-dashboard-items'>
            <p>
              <h2>{props.selectedTeam.name} Roster</h2>
            </p>
          </div>
          {props.players &&
            props.players.map(player => {
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
        <GamesCard />
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

import React, { useEffect, useState } from 'react';
import './TeamDashboard.css';
import Navbar from '../../components/Navbar/index';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import TeamSideNav from '../UserDashboard/TeamSideNav/TeamSideNav';
import {
  getCurrentTeam,
  getUserData
} from '../UserDashboard/userDashboardActions';

export default function TeamDashboard(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    loading: true,
    addingTeam: false,
    token: localStorage.getItem('token')
  });

  useEffect(() => {
    console.log('useEffect, TeamDashboard,js, line 18');
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
        <div id='team-dashboard-content'>
          <Navbar />
          <div id='team-dashboard-items'>
            <p>
              <b>{props.selectedTeam.name}</b>
            </p>
          </div>
          {props.players &&
            props.players.map(player => {
              return <p>{player.firstname}</p>;
            })}
        </div>
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

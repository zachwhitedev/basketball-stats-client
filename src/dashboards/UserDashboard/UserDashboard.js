import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import UserSideNav from './TeamSideNav/TeamSideNav';
import { getUserData } from '../UserDashboard/userDashboardActions';

export default function UserDashboard(props) {
  const { dispatch } = props;
  const[state, setState] = useState({
    userData: jwt_decode(localStorage.getItem('token')),
    token: localStorage.getItem('token')
  })
  
  useEffect(() => {
    const decoded = jwt_decode(state.token);
    console.log(props.teams);
    dispatch(getUserData(decoded.userid));
  }, [state.token]);

  return (
    <div id='user-dashboard-container'>
      <div id='user-dashboard-content'>
        <div id='user-dashboard-add-team-btn'>Add Team</div>
        <h1>Your Teams</h1>
      {props.teams[0] ? props.teams.map(team => {return <h3>{team.team_name}</h3>}) : ''}
      </div>
    </div>
  );
}

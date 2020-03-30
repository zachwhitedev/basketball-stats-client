import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import Navbar from '../../components/Navbar/index';
import { Link, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { getUserData, selectTeam } from '../UserDashboard/userDashboardActions';
import TeamListItem from './TeamListItem/index';

export default function UserDashboard(props) {
  const { dispatch } = props;
  const[state, setState] = useState({
    loggedOut: false
  })
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      const decoded = jwt_decode(localStorage.getItem('token'));
      dispatch(getUserData(decoded.userid));
    } else {
      setState({
        ...state,
        loggedOut: true
      })
    }
  }, [state.token, state.loggedOut]);


  return (
    <div id='user-dashboard-container'>
      <Navbar />
      {state.loggedOut && <Redirect to='/' />}
      <div id='user-dashboard-content'>
        <div id='user-dashboard-add-team-btn'>Add Team</div>
        <h1>Your Teams</h1>
      {props.teams[0] ? props.teams.map(team => {
        return (
        <TeamListItem
          teamname={team.name}
          teamid={team.id}
        />
        )
        }) : <p>Loading...</p>}
      </div>
    </div>
  );
}

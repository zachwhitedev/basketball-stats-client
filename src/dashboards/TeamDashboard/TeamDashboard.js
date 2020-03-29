import React, { useEffect, useState } from 'react';
import './TeamDashboard.css';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import TeamSideNav from '../UserDashboard/TeamSideNav/TeamSideNav';
import { getCurrentTeam, getUserData } from '../UserDashboard/userDashboardActions';

export default function TeamDashboard(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    loading: true,
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

  if(props.selectedTeam.fetched){
    return (
      <div id='team-dashboard-container'>
        <div id='team-dashboard-content'>
          <div id='team-dashboard-items'>
            {props.selectedTeam.name}
          </div>
          {props.players && props.players.map(player => {
            return(
            <p>{player.firstname}</p>
            )
          })}
        </div>
      </div>
    );
  } else return(
    <div id='team-dashboard-container'>
      <div id='team-dashboard-content'>
        Loading...
      </div>
    </div>
  ) 
}

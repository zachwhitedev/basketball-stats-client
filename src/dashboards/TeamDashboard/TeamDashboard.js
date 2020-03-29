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
    if (!props.selectedTeam.id) {
      const decoded = jwt_decode(state.token);
      const userid = decoded.userid;
      dispatch(getUserData(userid));

      const pathsArray = window.location.pathname.split('/');
      const teamId = pathsArray[3];
      dispatch(getCurrentTeam(userid, teamId));
    } else {
      console.log('loading...'); // hmmm....
    }
  });

  return (
    <div id='team-dashboard-container'>
      <div id='team-dashboard-content'>
        <div id='team-dashboard-items'>
          Team: {props.selectedTeam.name}
          <div>
            <div>top card 1</div>
            <div>top card 2</div>
            <div>top card 3</div>
            <div>top card 4</div>
          </div>
          <div id='players-and-games'>
            <div>players table</div>
            <div>game list</div>
          </div>
        </div>
      </div>
    </div>
  );
}

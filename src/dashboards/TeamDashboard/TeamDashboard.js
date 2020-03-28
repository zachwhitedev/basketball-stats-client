import React, { useEffect, useState } from 'react';
import './TeamDashboard.css';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import TeamSideNav from '../UserDashboard/TeamSideNav/TeamSideNav';
import { getTeam, getUserData } from '../UserDashboard/userDashboardActions';

export default function TeamDashboard(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    loading: true,
    token: localStorage.getItem('token')
  });

  useEffect(() => {
    if (!props.selectedTeam.name) {
      const decoded = jwt_decode(state.token);
      const userid = decoded.id;
      dispatch(getUserData(userid));

      const pathsArray = window.location.pathname.split('/');
      const teamId = pathsArray[1];
      dispatch(getTeam(userid, teamId));
    } else {
      console.log('litty'); // hmmm....
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

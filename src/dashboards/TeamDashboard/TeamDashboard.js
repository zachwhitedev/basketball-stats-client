import React, { useEffect } from 'react';
import './TeamDashboard.css';
import { Link } from 'react-router-dom';

import TeamSideNav from '../UserDashboard/TeamSideNav/TeamSideNav';
import { loginUser as getUserData } from '../../components/LoginPage/loginPageActions';

export default function TeamDashboard(props) {
  const { userData, dispatch } = props;

  return (
    <div id='team-dashboard-container'>
      <TeamSideNav />
      <div id='team-dashboard-content'>
        <div id='team-dashboard-items'>
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
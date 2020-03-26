import React, { useEffect } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';

import UserSideNav from './TeamSideNav/TeamSideNav';
import { loginUser as getUserData } from '../../components/LoginPage/loginPageActions';

export default function UserDashboard(props) {
  const { userData, dispatch } = props;

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div id='user-dashboard-container'>
      <div id='user-dashboard-content'>show teams here</div>
    </div>
  );
}

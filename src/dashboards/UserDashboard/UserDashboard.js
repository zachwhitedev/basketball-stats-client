import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import Navbar from '../../components/Navbar/index';
import AddTeamModal from '../../modals/AddTeamModal/index';
import { Link, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { getUserData, selectTeam } from '../UserDashboard/userDashboardActions';
import TeamListItem from './TeamListItem/index';

export default function UserDashboard(props) {
  const { dispatch, teams } = props;
  const [state, setState] = useState({
    loggedOut: false,
    addingTeam: true,
  });
  const [showAddTeamModal, setAddTeamModal] = useState(false);

  const changeModal = () => {
    if (props.teams.length >= 2) {
      alert('Free accounts are limited to 2 teams.');
      return;
    }
    const decoded = jwt_decode(localStorage.getItem('token'));
    dispatch(getUserData(decoded.userid)); // yes!! one more tymmmeeee
    setTimeout(() => {
      dispatch(getUserData(decoded.userid));
    }, 1200);
    setAddTeamModal(!showAddTeamModal);
  };

  useEffect(() => {
    console.log('useEffect, UserDashboard, line 24');
    if (localStorage.getItem('token')) {
      const decoded = jwt_decode(localStorage.getItem('token'));
      dispatch(getUserData(decoded.userid));
    } else {
      setState({
        ...state,
        loggedOut: true,
      });
    }
  }, [state.token, state.loggedOut, props.selectedTeam.id]);

  if (props.teams) {
    return (
      <div id='user-dashboard-container'>
        <Navbar />
        {showAddTeamModal && <AddTeamModal changeModal={changeModal} />}
        {state.loggedOut && <Redirect to='/' />}
        <div id='user-dashboard-content'>
          <div id='user-dashboard-add-team-btn' onClick={changeModal}>
            Add Team
          </div>
          <h1>Your Teams</h1>
          {
            teams.map((team, index) => {
              return <TeamListItem key={index} teamname={team.name} teamid={team.id} />;
            })
          }
        </div>
      </div>
    );
  } else {
    return (
      <div id='user-dashboard-container'>
        <Navbar />
        <div id='user-dashboard-content'>
          <p>Loading...</p>
        </div>
      </div>
    );
  }
}

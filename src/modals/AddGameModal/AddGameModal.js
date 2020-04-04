import React, { useState } from 'react';
import './AddTeamModal.css';
import jwt_decode from 'jwt-decode';

import { addNewTeam } from '../modalActions';
import { getUserData } from '../../dashboards/UserDashboard/userDashboardActions';

export default function AddGameModal(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    teamname: '',
    validationError: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    if(!state.teamname){
      setState({
        ...state,
        validationError: 'Please enter team name.'
      })
    } else {
      const decoded = jwt_decode(localStorage.getItem('token'));
      const userid = decoded.userid;
      const newTeam = {
        teamname: state.teamname,
        userid: userid
      }
      dispatch(addNewTeam(userid, newTeam));
      setState({
        teamname: '',
        validationError: 'Please enter team name.'
      })
      dispatch(getUserData(userid));
      props.changeModal();
    }
  }

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      validationError: ''
    });
  };

  return (
    <div>
      <div id='addgame-modal-shadow'></div>
      <div id='addgame-modal-container'>
        <div id='addgame-modal-content'>
          <h2>Create a new team</h2>
          <p>Team name</p>
          <input
              name='teamname'
              id='addgame-modal-input-teamname'
              type='text'
              placeholder='Riverdale Raptors - Winter 2021'
              onChange={e => onChange(e)}
            ></input>
        </div>
        {state.validationError}
        <div id='addgame-modal-buttons-container'>
          <div onClick={() => props.changeModal()}>Cancel</div>
          <div onClick={e => handleSubmit(e)}>Add Team</div>
        </div>
      </div>
    </div>
  );
}
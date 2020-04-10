import React, { useState } from 'react';
import './AddTeamModal.css';
import jwt_decode from 'jwt-decode';

import { addNewTeam } from '../modalActions';
import { getUserData } from '../../dashboards/UserDashboard/userDashboardActions';

export default function AddTeamModal(props) {
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
    } else if (localStorage.getItem('token')){
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
    } else {
      console.log('9999999999')
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
      <div id='addteam-modal-shadow'></div>
      <div id='addteam-modal-container'>
        <div id='addteam-modal-content'>
          <h2>Create a new team</h2>
          <p>Team name</p>
          <input
              name='teamname'
              id='addteam-modal-input-teamname'
              type='text'
              placeholder='Riverdale Raptors - Winter 2021'
              onChange={e => onChange(e)}
            ></input>
        </div>
        {state.validationError}
        <div id='addteam-modal-buttons-container'>
          <div onClick={() => props.changeModal()}>Cancel</div>
          <div onClick={e => handleSubmit(e)}>Add Team</div>
        </div>
      </div>
    </div>
  );
}

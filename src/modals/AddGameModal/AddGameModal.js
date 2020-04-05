import React, { useState } from 'react';
import './AddGameModal.css';
import jwt_decode from 'jwt-decode';

import { addNewGame } from '../modalActions';
import { getUserData } from '../../dashboards/UserDashboard/userDashboardActions';

export default function AddGameModal(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    gamename: '',
    validationError: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    if(!state.gamename){
      setState({
        ...state,
        validationError: 'Please enter game name.'
      })
    } else {
      const decoded = jwt_decode(localStorage.getItem('token'));
      const userid = decoded.userid;
      const teamid = props.selectedTeam.id;
      const newGame = {
        gamename: state.gamename,
        teamid: teamid,
        userid: userid
      }
      dispatch(addNewGame(userid, newGame));
      setState({
        teamname: '',
        validationError: 'Please enter game name.'
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
          <h2>Create a new game</h2>
          <p>Game name</p>
          <input
              name='gamename'
              id='addgame-modal-input-gamename'
              type='text'
              placeholder='vs. Vernon Vipers 3/7/2021'
              onChange={e => onChange(e)}
            ></input>
        </div>
        {state.validationError}
        <div id='addgame-modal-buttons-container'>
          <div onClick={() => props.changeModal()}>Cancel</div>
          <div onClick={e => handleSubmit(e)}>Add Game</div>
        </div>
      </div>
    </div>
  );
}
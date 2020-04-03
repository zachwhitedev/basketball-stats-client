import React, { useState, useEffect } from 'react';
import './AddPlayersModal.css';
import jwt_decode from 'jwt-decode';

import { addNewPlayers } from '../modalActions';
import {
  getUserData,
  getCurrentTeam
} from '../../dashboards/UserDashboard/userDashboardActions';

export default function AddPlayersModal(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    teamname: '',
    player1firstname: '',
    player1lastname: '',
    player1jersey: '',
    player2firstname: '',
    player2lastname: '',
    player2jersey: '',
    player3firstname: '',
    player3lastname: '',
    player3jersey: '',
    player4firstname: '',
    player4lastname: '',
    player4jersey: '',
    player5firstname: '',
    player5lastname: '',
    player5jersey: '',
    newPlayers: [],
    validationError: ''
  });

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      validationError: ''
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    let decoded = jwt_decode(localStorage.getItem('token'));
    const userid = decoded.userid;
    const teamid = props.team.id;

    const currentPlayers = [
      {
        firstname: state.player1firstname,
        lastname: state.player1lastname,
        jersey: state.player1jersey
      },
      {
        firstname: state.player2firstname,
        lastname: state.player2lastname,
        jersey: state.player2jersey
      },
      {
        firstname: state.player3firstname,
        lastname: state.player3lastname,
        jersey: state.player3jersey
      },
      {
        firstname: state.player4firstname,
        lastname: state.player4lastname,
        jersey: state.player4jersey
      },
      {
        firstname: state.player5firstname,
        lastname: state.player5lastname,
        jersey: state.player5jersey
      }
    ];

    let addPlayers = [];

    for (let i = 0; i < currentPlayers.length; i++) {
      let player = currentPlayers[i];
      if (!player.firstname && player.lastname) {
        setState({
          ...state,
          validationError: `Player with last name '${player.lastname}' must have first name.`
        });
        return;
      } else if (!player.firstname && player.jersey) {
        setState({
          ...state,
          validationError: `Player with jersey #${player.jersey} needs first name.`
        });
        return;
      } else if (player.firstname) {
        addPlayers.push(player);
        console.log(`added player ${player.firstname + ' ' + player.lastname}`);
        continue;
      } else {
        setState({
          ...state,
          validationError: 'Issue validating request.'
        });
      }
    }

    if (state.validationError || addPlayers.length < 1) {
      return;
    } else {
      const postBody = {
        userid: userid,
        teamid: teamid,
        players: addPlayers
      };
      console.log('POSTBODY', postBody);
      dispatch(addNewPlayers(userid, postBody));
      dispatch(getUserData(userid));
      dispatch(getCurrentTeam(userid, teamid));
      props.changeModal();
    }
  };

  useEffect(() => {
    console.log('useEffect, AddPlayersModal.js');
  });

  return (
    <div>
      <div id='addplayers-modal-shadow'></div>
      <div id='addplayers-modal-container'>
        <div id='addplayers-modal-content'>
          <h2>
            Add Players to {props.team.name} {props.team.id}
          </h2>
          <p>
            Add <b>first name</b>, <b>last name</b>, and/or <b>jersey</b>.
          </p>
          <div id='addplayers-modal-player-inputs-container'>
            <p id='player-input-order'>{'1.'}</p>
            <input
              id='player-firstname-input'
              name='player1firstname'
              placeholder='Michael'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-lastname-input'
              name='player1lastname'
              placeholder='Jordan'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-jersey-input'
              name='player1jersey'
              placeholder='23'
              maxLength='3'
              onChange={e => onChange(e)}
            ></input>
          </div>
          <div id='addplayers-modal-player-inputs-container'>
            <p id='player-input-order'>{'2.'}</p>
            <input
              id='player-firstname-input'
              name='player2firstname'
              placeholder='Larry'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-lastname-input'
              name='player2lastname'
              placeholder='Bird'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-jersey-input'
              name='player2jersey'
              placeholder='33'
              maxLength='3'
              onChange={e => onChange(e)}
            ></input>
          </div>
          <div id='addplayers-modal-player-inputs-container'>
            <p id='player-input-order'>{'3.'}</p>
            <input
              id='player-firstname-input'
              name='player3firstname'
              placeholder='Diana'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-lastname-input'
              name='player3lastname'
              placeholder='Taurasi'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-jersey-input'
              name='player3jersey'
              placeholder='3'
              maxLength='3'
              onChange={e => onChange(e)}
            ></input>
          </div>
          <div id='addplayers-modal-player-inputs-container'>
            <p id='player-input-order'>{'4.'}</p>
            <input
              id='player-firstname-input'
              name='player4firstname'
              placeholder='Wilt'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-lastname-input'
              name='player4lastname'
              placeholder='Chamberlain'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-jersey-input'
              name='player4jersey'
              placeholder='13'
              maxLength='3'
              onChange={e => onChange(e)}
            ></input>
          </div>
          <div id='addplayers-modal-player-inputs-container'>
            <p id='player-input-order'>{'5.'}</p>
            <input
              id='player-firstname-input'
              name='player5firstname'
              placeholder='Lila'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-lastname-input'
              name='player5lastname'
              placeholder='Leslie'
              onChange={e => onChange(e)}
            ></input>
            <input
              id='player-jersey-input'
              name='player5jersey'
              placeholder='9'
              maxLength='3'
              onChange={e => onChange(e)}
            ></input>
          </div>
        </div>
        {state.validationError}
        <div id='addplayers-modal-buttons-container'>
          <div onClick={() => props.changeModal()}>Cancel</div>
          <div onClick={e => handleSubmit(e)}>Add Players</div>
        </div>
      </div>
    </div>
  );
}

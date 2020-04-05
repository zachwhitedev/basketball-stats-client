import React from 'react';
import jwt_decode from 'jwt-decode';
import './GameListItem.css';
import { deleteGame } from '../../../UserDashboard/userDashboardActions';

export default function GameListItem(props) {
    const { dispatch } = props;

    const deleteItem = () => {
        const decoded = jwt_decode(localStorage.getItem('token'));
        const userid = decoded.userid; 
        const teamid = props.teamid;
        const gameid = props.id;
        dispatch(deleteGame(userid, teamid, gameid));
    }

    const editItem = () => {
      alert('Editing games isn\'t ready yet. Be patient!')
    }
    
  return (
    <div id='game-list-item-container'>
      <div onClick={() => console.log(props.id)}>
        <span>{props.name} </span>
      </div>
      <div id='game-option-btns'>
        <div id='game-edit-btn' onClick={() => editItem()}>Edit</div>
        <div id='game-delete-btn' onClick={() => deleteItem()}>Delete</div>
      </div>
    </div>
  );
}
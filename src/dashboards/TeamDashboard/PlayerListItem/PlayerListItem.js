import React from 'react';
import jwt_decode from 'jwt-decode';
import './PlayerListItem.css';
import { deletePlayer } from '../../UserDashboard/userDashboardActions';

export default function PlayerListItem(props) {
    const { dispatch } = props;

    const deleteItem = () => {
        const decoded = jwt_decode(localStorage.getItem('token'));
        const userid = decoded.userid; 
        const teamid = props.teamid;
        const playerid = props.id;
        dispatch(deletePlayer(userid, teamid, playerid));
    }
    
  return (
    <div id='player-list-item-container'>
      <div onClick={() => console.log(props.id)}>
        <span>{props.firstname} </span>
        <span>{props.lastname ? props.lastname : ''} </span>
        <span>{props.jersey ? '#' + props.jersey : ''}</span>
      </div>
      <div id='player-delete-btn' onClick={() => deleteItem()}>Delete</div>
    </div>
  );
}

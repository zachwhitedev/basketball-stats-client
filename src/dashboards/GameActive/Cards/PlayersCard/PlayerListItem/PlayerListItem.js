import React from 'react';
import jwt_decode from 'jwt-decode';
import './PlayerListItem.css';
import { deletePlayer } from '../../../../UserDashboard/userDashboardActions';

export default function PlayerListItem(props) {
    const { dispatch, firstname, lastname, jersey, id, selected } = props;

    
  return (
    <div id={selected ? 'player2-list-item-selected-container' : 'player2-list-item-container'} onClick={() => props.selectPlayer(id)}>
      <div>
        <span>{firstname} </span>
        <span>{lastname ? lastname : ''} </span>
        <span>{jersey ? '#' + jersey : ''}</span>
      </div>
    </div>
  );
}
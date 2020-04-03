import React from 'react';

import { deletePlayer } from '../../UserDashboard/userDashboardActions';

export default function PlayerListItem(props) {
    const { dispatch } = props;

    const deletePlayer = (playerid) => {
        const decoded = jwt_decode(localStorage.getItem('token'));
        const userid = decoded.userid; 
        const teamid = props.teamid;
        dispatch(deletePlayer(userid, teamid, playerid));
    }
    
  return (
    <div id='player-list-item-container'>
      {/* <div>Edit</div> */}
      <div onClick={() => deletePlayer(props.id)}>Delete</div>
      <p>
        <span>{props.firstname} </span>
        <span>{props.lastname ? props.lastname : ''} </span>
        <span>{props.jersey ? '#' + props.jersey : ''}</span>
      </p>
    </div>
  );
}

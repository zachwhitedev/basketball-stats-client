import React, { useEffect, useState } from 'react';
import './TeamListItem.css';
import jwt_decode from 'jwt-decode';
import { Link, Redirect } from 'react-router-dom';
import { selectTeam, deleteTeam } from '../userDashboardActions';

export default function TeamListItem(props) {
  const { dispatch } = props;
  const [state, setState] = useState({
    redirect: false
  });

  const teamDelete = (teamid) => {
      console.log('attempt team delete');
      const decoded = jwt_decode(localStorage.getItem('token'));
      const userid = decoded.userid;
      dispatch(deleteTeam(userid, teamid));
  }

  const viewTeam = (id, name) => {
    dispatch(
      selectTeam({
        id: id,
        name: name
      })
    );
    setState({
      ...state,
      redirect: true
    });
  };

  if (state.redirect) {
    return <Redirect to={`/team/${props.teamname}/${props.teamid}`} />;
  }

  return (
    <div id='team-list-item'>
      <h3 id='team-list-item-title' onClick={() => viewTeam(props.teamid, props.teamname)}>{props.teamname}</h3>
      <div><p id='delete-team-btn' onClick={() => teamDelete(props.teamid)}>Delete</p></div>
    </div>
  );
}

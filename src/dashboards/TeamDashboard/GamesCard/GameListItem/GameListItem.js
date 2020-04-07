import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import './GameListItem.css';
import { Link, Redirect } from 'react-router-dom';
import { deleteGame } from '../../../UserDashboard/userDashboardActions';

export default function GameListItem(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    redirect: false,
  });

  const viewGame = (gameid, teamid) => {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const userid = decoded.userid;
    // dispatch(
    //   selectGame({
    //     id: gameid,
    //     teamid: teamid,
    //     userid: userid
    //   })
    // );
    setState({
      ...state,
      redirect: true,
    });
  };

  const deleteItem = () => {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const userid = decoded.userid;
    const teamid = props.teamid;
    const gameid = props.gameid;
    dispatch(deleteGame(userid, teamid, gameid));
  };

  const editItem = () => {
    alert("Editing games isn't ready yet. Be patient!");
  };

  if (state.redirect) {
    return <Redirect to={`/game/${props.teamid}/${props.gameid}`} />;
  }

  return (
    <div id='game-list-item-container'>
      <div onClick={() => viewGame(props.id, props.teamid)}>
        <span id='game-list-item-name'>{props.name} </span>
      </div>
      <div id='game-option-btns'>
        <div id='game-edit-btn' onClick={() => editItem()}>
          Edit
        </div>
        <div id='game-delete-btn' onClick={() => deleteItem()}>
          Delete
        </div>
      </div>
    </div>
  );
}

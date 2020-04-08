import React from 'react';
import './TitleCard.css';

export default function TitleCard(props) {
  return (
    <div id='gameactive-title-card'>
      <h1>Game: {props.game.game_name}</h1>
      <p>{props.game.teamscore + ' | ' + props.game.oppscore} </p>
    </div>
  );
}

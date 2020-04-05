import React from 'react';
import './GamesCard.css';
import GameListItem from './GameListItem/index';

export default function GamesCard(props) {
  return (
    <div id='team-dashboard-games-container'>
      <div id='new-game-btn' onClick={() => props.changeModal()}>
        New Game
      </div>
      <h3>Games</h3>
      {props.games.map((game) => {
        return (
          <GameListItem
            name={game.game_name}
            id={game.game_id}
            teamid={props.selectedTeam.id}
          />
        );
      })}
    </div>
  );
}

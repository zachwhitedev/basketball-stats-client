import React from 'react';
import './GamesCard.css';

export default function GamesCard(props){
    return(
        <div id='team-dashboard-games-container'>
            <div id='new-game-btn' onClick={() => props.changeModal()}>New Game</div>
            <h3>Games</h3>
            {props.games.map(game => {
              return (
              <p>{game.game_name}</p>
              );
            })}
        </div>
    )
}
import React, { useEffect } from 'react';
import './PlayersCard.css';
import PlayerListItem from './PlayerListItem/PlayerListItem';
import { getPlayerGame } from '../cardActions';

export default function PlayersCard(props) {
  const {state, players, selectPlayer, dispatch, game, team } = props;


  useEffect(() => {
    dispatch(getPlayerGame(game.game_id, team.id));
  })

  return (
    <div id='gameactive-players-card'>
      <h3>Players</h3>
      <div>
        {players.map((player) => {
          let playerSelected = false;
          if (state.selectedPlayerId == player.id) {
            playerSelected = true;
          }
          return (
            <PlayerListItem
              firstname={player.firstname}
              id={player.id}
              selected={playerSelected}
              selectPlayer={selectPlayer}
            />
          );
        })}
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import './PlayersCard.css';
import PlayerListItem from './PlayerListItem/PlayerListItem';
import { getPlayerGame } from '../cardActions';

export default function PlayersCard(props) {
  const { state, players, selectPlayer, dispatch, game, team, playergame, tempEvent } = props;

  useEffect(() => {
    if(!tempEvent.eventid){
      console.log('useEffect, PlayersCard.js');
      dispatch(getPlayerGame(game.game_id, team.id));
    }
  }, [team, game, tempEvent.eventid]);

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
              lastname={player.lastname ? player.lastname : null}
              jersey={player.jersey ? player.jersey : null}
              id={player.id}
              selected={playerSelected}
              selectPlayer={selectPlayer}
              playergame={playergame}
              tempEvent={tempEvent}
            />
          );
        })}
      </div>
    </div>
  );
}

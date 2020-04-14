import React, { useEffect } from 'react';
import './PlayersCard.css';
import PlayerListItem from './PlayerListItem/PlayerListItem';
import { getPlayerGame } from '../cardActions';

export default function PlayersCard(props) {
  const { state, players, selectPlayer, dispatch, game, team, playergame, tempEvent } = props;

  useEffect((dispatch) => {
    console.log('useEffect, PlayersCard.js');
    if(!tempEvent.eventid){
      dispatch(getPlayerGame(game.game_id, team.id));
    }
  }, [team, game, tempEvent.eventid]);

  return (
    <div id='gameactive-players-card'>
      <h3 id='gameactive-playercard-title'>Player Stats</h3>
      <div>
        <div id='playergame-top-row'>
          <div>First</div>
          <div>Last</div>
          <div>Jersey</div>
          <div>PTS</div>
          <div>FG%</div>
          <div>3P%</div>
          <div>FT%</div>
          <div>REB</div>
          <div>AST</div>
          <div>BLK</div>
          <div>STL</div>
          <div>TO</div>
          <div>PF</div>
        </div>
        {players.map((player, index) => {
          let playerSelected = false;
          if (state.selectedPlayerId == player.id) {
            playerSelected = true;
          }
          return (
            <PlayerListItem
              key={index}
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

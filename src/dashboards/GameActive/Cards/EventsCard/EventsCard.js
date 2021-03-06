import React from 'react';
import './EventCard.css';

import { eventList } from './game-events';
import { addGameEvent } from '../../gameActiveActions.js';
import GameEventItem from './GameEventItem/GameEventItem';


export default function EventCard(props){
  const { state, clearEvent, dispatch, game, team } = props;

  const submitEvent = () => {
    if(!state.selectedPlayerId){
      alert('Error: No player selected.')
    } else if(!state.selectedEventId){
      alert('Error: Game event not selected.')
    } else{
      dispatch(addGameEvent(state.selectedPlayerId, game.game_id, team.id, state.selectedEventId));
      clearEvent();
      // begin 'success' animation...
    }
  }
  return(
    <div id='gameactive-events-card'>
    <h3 id='game-events-card-title'>Game Events</h3>
    <div id='gameactive-event-buttons'>
      {eventList.map((event, index) => {
        let eventSelected = false;
        if (props.state.selectedEventId == event.id) {
          eventSelected = true;
        }
        return (
          <GameEventItem
            key={index}
            id={event.id}
            short={event.short}
            long={event.long}
            selected={eventSelected}
            selectEvent={props.selectEvent}
          />
        );
      })}
    </div>
    <div id='gameactive-submit-event-btn' onClick={() => submitEvent()}>
      SUBMIT
    </div>
  </div>
  )
}
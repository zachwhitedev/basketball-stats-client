import React from 'react';
import './EventCard.css';

import { eventList } from './game-events';
import GameEventItem from './GameEventItem/GameEventItem';


export default function EventCard(props){
  const { state, clearEvent } = props;

  const submitEvent = () => {
    console.log(state)
    if(!state.selectedPlayerId){
      alert('Error: No player selected.')
    } else if(!state.selectedEventId){
      alert('Error: Game event not selected.')
    } else{
      // dispatch addGameEvent here
      clearEvent();
      alert('Success.')
    }
  }
  return(
    <div id='gameactive-events-card'>
    <h3 id='game-events-card-title'>Game Events</h3>
    <div id='gameactive-event-buttons'>
      {eventList.map((event) => {
        let eventSelected = false;
        if (props.state.selectedEventId == event.id) {
          eventSelected = true;
        }
        return (
          <GameEventItem
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
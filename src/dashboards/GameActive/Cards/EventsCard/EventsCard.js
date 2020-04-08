import React from 'react';
import './EventCard.css';

import { eventList } from './game-events';
import GameEventItem from './GameEventItem/GameEventItem';

export default function EventCard(props){
  return(
    <div id='gameactive-game-events-card'>
    <h3>Game Events</h3>
    <div>
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
  </div>
  )
}
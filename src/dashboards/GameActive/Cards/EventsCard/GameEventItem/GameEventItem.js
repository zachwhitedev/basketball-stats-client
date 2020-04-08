import React from 'react';
import './GameEventItem.css';

export default function GameEventItem(props) {
    const { dispatch, id, selected, short, long } = props;

    
  return (
    <div id={selected ? 'game-event-item-selected-container' : 'game-event-item-container'} onClick={() => props.selectEvent(id)}>
      <div>
        <span>{short}</span>
      </div>
    </div>
  );
}
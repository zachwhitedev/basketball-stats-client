import React from 'react';
import './GameEventItem.css';
import basketball from '../../../../../assets/img/basketball.png';


export default function GameEventItem(props) {
    const { dispatch, id, selected, short, long } = props;

    
  return (
    <div id={selected ? 'game-event-item-selected-container' : 'game-event-item-container'} onClick={() => props.selectEvent(id)}>
       <img id='game-event-item-img' src={basketball}/>
       <p id='game-event-shortname'>{short}</p>
    </div>
  );
}
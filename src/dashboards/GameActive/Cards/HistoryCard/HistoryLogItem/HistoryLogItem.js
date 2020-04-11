import React from 'react';
import './HistoryLogItem.css';

export default function HistoryLogItem(props) {

  const undoEvent = (evnt) => {
    // dispatch(undoGameEvent(evnt));
    props.removeItem(evnt);
  }

  return (
    <div id='historylogitem-container'>
      <div id='historylogitem'>{props.player + ' - ' + props.description}</div>
      <div onClick={() => undoEvent(props.tempEvent)}>Undo</div>
    </div>
  );
}

import React from 'react';
import './HistoryLogItem.css';

export default function HistoryLogItem(props) {

  const undoEvent = (evnt) => {
    let blah = evnt;
    let standin = {
      eventid: 0
    }
    let copy = Object.assign(standin, blah);
    copy.eventid = blah.eventid + 12;
    props.removeItem(copy);
  }

  return (
    <div id='historylogitem-container'>
      <div id='historylogitem'>{props.player + ' - ' + props.description}</div>
      <div onClick={() => undoEvent(props.tempEvent)}>Undo</div>
    </div>
  );
}

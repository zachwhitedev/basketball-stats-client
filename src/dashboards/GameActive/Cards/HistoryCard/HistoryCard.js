import React, { useState, useEffect } from 'react';
import './HistoryCard.css';

export default function HistoryCard(props){
  const { tempEvent } = props;
  const[eventLog, updateLog] = useState([{ name: 'Test' }]);

  useEffect(() => {
    let description = ''
    if(tempEvent.eventid == 1){
      description = 'Lebron James!'
    }
    updateLog([...eventLog, { name: description }])
  }, [tempEvent.eventid])

    return(
        <div id='gameactive-eventlog-card'>
        <h3>Event Log</h3>
        {eventLog.map(item => {
          return(
            <p>{item.name}</p>
          )
        })}
      </div>
    )
}
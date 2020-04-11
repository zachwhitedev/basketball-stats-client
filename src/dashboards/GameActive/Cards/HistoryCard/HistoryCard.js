import React, { useState, useEffect } from 'react';
import HistoryLogItem from './HistoryLogItem/HistoryLogItem';
import './HistoryCard.css';

export default function HistoryCard(props){
  const { tempEvent, players } = props;
  const[eventLog, updateLog] = useState([]);

  useEffect(() => {
    console.log('useEffect, HistoryCard.js')
    if(tempEvent.playerid && players.length > 0){
      let description = '';
      let playername = '';
      switch(tempEvent.eventid){
        case 1:
          description = 'Made 2pt shot.'
          break;
        case 2:
          description = 'Missed 2pt shot.'
          break;
        case 3:
          description = 'Made 3pt shot.'
          break;
        case 4:
          description = 'Missed 3pt shot.'
          break;
        case 5:
          description = 'Made free throw.'
          break;
        case 6:
          description = 'Missed free throw.'
          break;
        case 7:
          description = 'Got a rebound.'
          break;
        case 8:
          description = 'Made an assist.'
          break;
        case 9:
          description = 'Made a block.'
          break;
        case 10:
          description = 'Got a steal.'
          break;
        case 11:
          description = 'Turned the ball over.'
          break;
        case 12:
          description = 'Made a foul.'
          break;
        default:
          break;
      }
      for(let i=0; i < players.length; i++){
        if(tempEvent.playerid == players[i].id){
          playername = players[i].firstname;
          updateLog([{ player: playername, name: description, tempEvent: tempEvent }, ...eventLog])
          return;
        } else continue;
      }
    } else return;
  }, [tempEvent.eventid])

  const removeItem = (evnt) => {
    let newArray = [];
    let foundIt = false;
    for(let i=0; i < eventLog.length; i++){
      if(eventLog[i].tempEvent.eventid == evnt.eventid && eventLog[i].tempEvent.playerid == evnt.playerid && !foundIt){
        foundIt = true;
        continue;
      } else {
        newArray.push(eventLog[i]);
        continue;
      }
    }
    updateLog(newArray);
  }

    return(
        <div id='gameactive-eventlog-card'>
        <h3>Event Log</h3>
        {eventLog.map(item => {
          return(
            <HistoryLogItem player={item.player} description={item.name} tempEvent={item.tempEvent} removeItem={removeItem} />
          )
        })}
      </div>
    )
}
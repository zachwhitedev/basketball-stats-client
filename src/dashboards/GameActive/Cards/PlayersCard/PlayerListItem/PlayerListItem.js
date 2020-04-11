import React, { useState, useEffect } from 'react';
import './PlayerListItem.css';

export default function PlayerListItem(props) {
  const { dispatch, firstname, lastname, jersey, id, selected, playergame, tempEvent } = props;

  const [state, setState] = useState({
    fg: 0,
    nofg: 0,
    trey: 0,
    notrey: 0,
    ft: 0,
    noft: 0,
    reb: 0,
    ast: 0,
    blk: 0,
    stl: 0,
    tover: 0,
    pf: 0,
  });

  const tempState = (eventid) => {
    switch(eventid){
      case 1: 
        setState({
          ...state,
          fg: state.fg + 1
        })
        break;
      case 2: 
        setState({
          ...state,
          nofg: state.nofg + 1
        })
        break;
      case 3: 
        setState({
          ...state,
          trey: state.trey + 1
        })
        break;
      case 4: 
        setState({
          ...state,
          notrey: state.notrey + 1
        })
        break;
      case 5: 
        setState({
          ...state,
          ft: state.ft + 1
        })
        break;
      case 6: 
        setState({
          ...state,
          noft: state.noft + 1
        })
        break;
      case 7: 
        setState({
          ...state,
          reb: state.reb + 1
        })
        break;
      case 8: 
        setState({
          ...state,
          ast: state.ast + 1
        })
        break;
      case 9: 
        setState({
          ...state,
          blk: state.blk + 1
        })
        break;
      case 10: 
        setState({
          ...state,
          stl: state.stl + 1
        })
        break;
      case 11: 
        setState({
          ...state,
          tover: state.tover + 1
        })
      break;
      case 12: 
        setState({
          ...state,
          pf: state.pf + 1
        })
        break;
      default:
        console.log('Event type not recognized.')
        break;
    }
  }

  useEffect(() => {
    if(tempEvent.eventid){
      if(tempEvent.playerid == id){
        console.log('ding!')
        tempState(tempEvent.eventid)
      }
    }
    if(playergame && !tempEvent.eventid){
      for (let i = 0; i < playergame.length; i++) {
        if (playergame[i].playerid == id) {
          setState({
            ...state,
            fg: playergame[i].fg,
            nofg: playergame[i].nofg,
            trey: playergame[i].trey,
            notrey: playergame[i].notrey,
            ft: playergame[i].ft,
            noft: playergame[i].noft,
            reb: playergame[i].reb,
            ast: playergame[i].ast,
            blk: playergame[i].blk,
            stl: playergame[i].stl,
            tover: playergame[i].tover,
            pf: playergame[i].pf    
          });
          break;
        }
        continue;
      }
    }
  }, [playergame, tempEvent.eventid])

  // ^^ pick something clever for the other parameter... updates once and then not again?

  return (
    <div
      id={
        selected
          ? 'player2-list-item-selected-container'
          : 'player2-list-item-container'
      }
      onClick={() => props.selectPlayer(id)}
    >
      <div id='playercard-row-item'>
        <div>{firstname}</div> 
        <div>{lastname ? lastname : ''}</div>
        <div id='player-table-jersey'>{jersey ? jersey : 'N/A'}</div> 
        <div>{(state.fg * 2) + (state.trey * 3) + state.ft}</div>
        <div>{state.fg > 0 ? ((state.fg / (state.nofg + state.fg)) * 100).toFixed(0) + '%' : 0 + '%'}</div>
        <div>{state.trey > 0 ? ((state.trey / (state.notrey + state.trey)) * 100).toFixed(0) + '%' : 0 + '%'}</div>
        <div>{state.ft > 0 ? ((state.ft / (state.ft + state.noft)) * 100).toFixed(0) + '%' : 0 + '%'}</div>
        <div>{state.reb}</div>
        <div>{state.ast}</div>
        <div>{state.blk}</div>
        <div>{state.stl}</div>
        <div>{state.tover}</div>
        <div>{state.pf}</div>
      </div>
    </div>
  );
}

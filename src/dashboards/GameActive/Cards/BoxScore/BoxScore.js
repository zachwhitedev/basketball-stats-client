import React, { useEffect } from 'react';
import './BoxScore.css';

export default function BoxScore(props) {
  const { game } = props;

  useEffect(() => {
    console.log('useEffect, BoxScore.js');
  }, [game])

  if (game) {
    return (
      <div id='gameactive-titlecard'>
        <h3>Game Title</h3>
        <h4>
          {game.teamscore} - {game.oppscore}
        </h4>
      </div>
    );
  } else {
    return (
      <div id='gameactive-titlecard'>
        <h2>Loading...</h2>
      </div>
    );
  }
}

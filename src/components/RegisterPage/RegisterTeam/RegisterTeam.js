import React, { useEffect } from 'react';
import './RegisterTeam.css';
import { Link } from 'react-router-dom';

export default function RegisterTeam(props) {
  return (
      <div id='registerteam-page-content'>
        <div id='registerteam-form'>
          <p id='lets-add-team'>Let's add your first team!</p>
          <div id='registerteam-input-item'>
            <span id='registerteam-input-label'>TEAM NAME</span>
            <input id='registerteam-input' type='text' placeholder='Riverdale Raptors Winter 2020'></input>
          </div>
          <div id='registeraddteam-btn'>ADD TEAM</div>
          <p id='already-registered'>Already have an account? <b>Sign in.</b></p>
          {/* eventually let users select a team color/logo etc? */}
        </div>
      </div>
  );
}
import React, { useState } from 'react';
import './AddTeamModal.css';

export default function AddTeamModal() {
  const [state, setState] = useState({
    hidden: true
  });

  return (
    <div>
      <div id='addteam-modal-shadow'></div>
      <div id='addteam-modal-container'>
        <div id='addteam-modal-content'>
          <p>modal</p>
        </div>
        <div id='addteam-modal-buttons-container'>
          <div>Cancel</div>
          <div>Add Player</div>
        </div>
      </div>
    </div>
  );
}

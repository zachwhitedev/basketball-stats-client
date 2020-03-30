import React, { useState } from 'react';

export default function EditTeamModal() {
  const [state, setState] = useState({
    hidden: true
  });

  return (
    <div>
      <div id='edit-team-modal-shadow'></div>
      <p>modal</p>
    </div>
  );
}

import React, { useState } from 'react';
import './SidebarButtons.css';

import { Link, Redirect } from 'react-router-dom';


export default function SidebarButtons(props) {
  const [state, setState] = useState({
    loggedOut: false,
  });

  const logOut = () => {
    localStorage.clear();
    setState({
      ...state,
      loggedOut: true,
    });
  };

  return (
    <div>
      {state.loggedOut && <Redirect to='/' />}
    <h3>{props.user.firstname} {props.user.lastname}</h3>
    <div id='sidebar-btn'>
      <Link id='router-link-styles' to='/'>Teams</Link>
    </div>
    <div id='sidebar-btn'>
      <Link id='router-link-styles' to='/pricing'>Upgrade</Link>
    </div>
    <div id='sidebar-btn'>
      <Link id='router-link-styles' to='/support'>Support</Link>
    </div>
    <div id='sidebar-btn'>
      <Link id='router-link-styles' onClick={() => logOut()}>Logout</Link>
    </div>
    </div>
  );
}

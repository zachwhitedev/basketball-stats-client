import React from 'react';
import './TitleCard.css';

import { Link, Redirect } from 'react-router-dom';


export default function TitleCard(props) {
  return (
    <div>
    <h3>John Smith</h3>
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
      <Link id='router-link-styles'>Logout</Link>
    </div>
    </div>
  );
}

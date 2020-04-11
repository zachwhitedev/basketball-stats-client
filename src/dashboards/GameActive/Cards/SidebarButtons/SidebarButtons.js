import React from 'react';
import './SidebarButtons.css';

import { Link, Redirect } from 'react-router-dom';


export default function SidebarButtons(props) {
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

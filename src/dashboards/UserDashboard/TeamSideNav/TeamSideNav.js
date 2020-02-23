import React, { useEffect } from 'react';
import './TeamSideNav.css';
import { Link } from 'react-router-dom';

export default function TeamSideNav(props) {
  const { userData, dispatch } = props;

  return (
    <div id='team-sidenav-container'>
      <div id='team-sidenav-content'>side nav</div>
    </div>
  );
}

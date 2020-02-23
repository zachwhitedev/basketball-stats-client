import React, { useEffect } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/index';

export default function LandingPage(props) {
  return (
    <div id='landingpage-container'>
      <Navbar />
      <div id='landingpage-content'>
        Marketing materials go here.
      </div>
    </div>
  );
}
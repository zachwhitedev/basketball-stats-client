import React, { useEffect } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import mrkt1 from '../../assets/img/mrkt.png';

import Navbar from '../Navbar/index';

export default function LandingPage(props) {
  return (
    <div id='landingpage-container'>
      <Navbar />
      <div id='landingpage-content'>
        <h1>Slam Dunk Stats</h1>
        <h3>The internet's best web app for tracking and storing basketball game statistics in real time.</h3>
        <p>Create teams, add players, start games, and record all the important stats you need.</p>
        <img id='main-img' src={mrkt1}></img>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import './GameActive.css';
import Navbar from '../../components/Navbar/index';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function GameActive(props) {
  const { dispatch } = props;

  const [state, setState] = useState({
    stuff: 'stuff',
  });

  useEffect(() => {
    console.log('useEffect, GameActive.js');
  }, []);

  if (true) {
    return (
      <div id='gameactive-container'>
        <Navbar />
        <div id='gameactive-content'>
          <div id='gameactive-items'>litty</div>
        </div>
      </div>
    );
  } else
    return (
      <div id='gameactive-container'>
        <div id='gameactive-content'>
          <Navbar />
          <p>Loading...</p>
        </div>
      </div>
    );
}

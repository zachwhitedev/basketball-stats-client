import React, { useEffect, useState } from 'react';
import './SupportPage.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../Navbar/index';

export default function SupportPage(props) {
  const [state, setState] = useState({
    successMsg: ''
  });

  return (
    <div id='supportpage-container'>
      <Navbar />
      <div id='supportpage-content'>
        <p>This site is under development.</p>
        <p>No data is being permanently saved.</p>
        <p>If you have any questions you can contact me:</p>
        <p>zechnwhite at gmail.com</p>
      </div>
    </div>
  );
}

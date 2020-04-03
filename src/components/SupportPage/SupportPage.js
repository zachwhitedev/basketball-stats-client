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
        <p>Support page coming soon. For questions you can contact: zechnwhite@gmail.com</p>
      </div>
    </div>
  );
}

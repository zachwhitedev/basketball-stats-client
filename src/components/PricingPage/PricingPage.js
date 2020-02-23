import React, { useEffect, useState } from 'react';
import './PricingPage.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../Navbar/index';

export default function PricingPage(props) {
  const [state, setState] = useState({
    successMsg: ''
  });

  return (
    <div id='pricingpage-container'>
      <Navbar />
      <div id='pricingpage-content'>
        <p>pricing page</p>
      </div>
    </div>
  );
}

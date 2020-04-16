import React, { useEffect, useState } from 'react';
import './PricingPage.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import CheckoutForm from './CheckoutForm/CheckoutForm';

import Navbar from '../Navbar/index';

export default function PricingPage(props) {
  const [state, setState] = useState({
    successMsg: ''
  });


  if(localStorage.getItem('token')){
    return (
      <div id='pricingpage-container'>
        <Navbar />
        <div id='pricingpage-content'>
          <h2>Premium Accounts</h2>
          <ul>
            <li>up to 12 teams</li>
            <li>up to 30 players per team</li>
            <li>up to 40 games per team</li>
          </ul>
          <p>For a one-time payment of</p>
          <h2>$3.99</h2>
          <p>Enter card details below:</p>
          <CheckoutForm />
        </div>
      </div>
    );
  } else {
    return(
      <div id='pricingpage-container'>
        <Navbar />
        <div id='pricingpage-content'>
          <h2>Premium Accounts</h2>
          <ul>
            <li>up to 12 teams</li>
            <li>up to 30 players per team</li>
            <li>up to 40 games per team</li>
          </ul>
          <p>All for a one-time payment of:</p>
          <h2>$3.99</h2>
          <p>Log in or create an account in order to upgrade!</p>
        </div>
      </div>
    )
  }
}

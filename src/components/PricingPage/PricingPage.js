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
          <p>Test payments (not real)</p>
          <p>premium = $2.99</p>
          <CheckoutForm />
          <p>Premium accounts not yet available. Coming soon.</p>
        </div>
      </div>
    );
  } else {
    return(
      <div id='pricingpage-container'>
        <Navbar />
        <div id='pricingpage-content'>
          <p>Premium accounts not yet available. Coming soon.</p>
        </div>
      </div>
    )
  }
}

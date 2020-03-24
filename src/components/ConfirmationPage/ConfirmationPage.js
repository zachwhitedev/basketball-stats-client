import React, { useEffect, useState } from 'react';
import './ConfirmationPage.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { api } from '../../utilities';

import Navbar from '../Navbar/index';

export default function ConfirmationPage(props) {
  const [state, setState] = useState({
    successMsg: ''
  });

  useEffect(() => {
    let pathname = window.location.pathname;
    let confirmStringRequest = {
      confirmstring: pathname.slice(-15)
    };
    axios
      .post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/confirmEmail', confirmStringRequest)
      .then(res => {
        setState({
          ...state,
          successMsg: res.data.success
        });
      })
      .catch(err => console.log(err));
  }, []);

  if (!state.successMsg) {
    return (
      <div id='confirmationpage-container'>
        <Navbar />
        <div id='confirmationpage-content'>
          <p>Sit tight, we're confirming you...</p>
          <p>put a spinner thingy here</p>
        </div>
      </div>
    );
  } else {
    return (
      <div id='confirmationpage-container'>
        <Navbar />
        <div id='confirmationpage-content'>
          <p>{state.successMsg}</p>
          <p>Redirecting you to login...</p>
          <Redirect to='/login' />
        </div>
      </div>
    );
  }
}

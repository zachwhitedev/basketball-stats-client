import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../Navbar/index';
import axios from 'axios';

import { loginUser as getUserData } from './loginPageActions';

export default function LoginPage(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    validationError: '',
    redirect: false
  });

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      validationError: ''
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState({
      ...state,
      validationError: ''
    });
    const { dispatch } = props;
    if (
      !state.email ||
      !state.email.includes('@') ||
      !state.email.includes('.')
    ) {
      setState({
        ...state,
        validationError: 'Please enter a valid email.'
      });
      return;
    } else if (!state.email || !state.password) {
      setState({
        ...state,
        validationError: 'Please enter all fields.'
      });
      return;
    } else {
      const user = {
        email: state.email,
        password: state.password
      };
      axios
        .post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/login', user)
        .then(res => {
          const data = JSON.parse(res.data.body);
          if (data.error) {
            setState({
              ...state,
              validationError: res.data.error
            });
          } else if (data.token) {
            localStorage.setItem('token', data.token);
            dispatch(getUserData());
            setState({ redirect: true });
          } else {
            setState({
              ...state,
              validationError: 'No token in response. Please contact support.'
            });
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div id='loginpage-container'>
      {state.redirect && <Redirect to='/dashboard' />}
      <Navbar />
      <div id='loginpage-content'>
        <p id='signin-to-account'>Sign in to your account</p>
        <span id='loginpage-label'>Email</span>
        <br></br>
        <input
          id='loginpage-input'
          type='text'
          name='email'
          onChange={e => onChange(e)}
        ></input>
        <br></br>
        <span id='loginpage-label'>Password</span>
        <br></br>
        <input
          id='loginpage-input'
          type='password'
          name='password'
          onChange={e => onChange(e)}
        ></input>
        <div id='loginpage-validation-error'>{state.validationError}</div>
        <div id='login-btn' onClick={e => handleSubmit(e)}>
          LOG IN
        </div>
        <span id='loginpage-no-account'>
          Don't have an account?
          <Link id='loginpage-signup-link' to='/register'>
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
}

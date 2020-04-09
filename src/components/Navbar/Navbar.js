import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, Redirect } from 'react-router-dom';
import basketball from '../../assets/img/basketball.png';

const MainNav = () => {
  return (
    <div id='navbar-container'>
      <Link id='nav-logo' to='/'>
        <img id='nav-logo-img' src={basketball} />
        <h1 id='nav-logo-title'>Testing</h1>
      </Link>
      <div id='nav-link-item'>
        <Link id='less-link' to='/support'>
          Support
        </Link>
      </div>
      <div id='nav-link-item'>
        <Link id='less-link' to='/pricing'>
          Pricing
        </Link>
      </div>
      <div id='nav-link-item'>
        <Link id='login-link' to='/login'>
          Sign in
        </Link>
      </div>
      <div id='nav-link-item'>
        <Link id='register-link' to='/register'>
          GET STARTED
        </Link>
      </div>
    </div>
  );
};

const UserNav = () => {
  const [state, setState] = useState({
    loggedOut: false,
  });

  const logOut = () => {
    localStorage.clear();
    setState({
      ...state,
      loggedOut: true,
    });
  };
  return (
    <div id='navbar-container'>
      {state.loggedOut && <Redirect to='/' />}
      <Link id='nav-logo' to='/'>
        <img id='nav-logo-img' src={basketball} />
        <h1 id='nav-logo-title'>Testing</h1>
      </Link>
      <div id='nav-link-item'>
        <Link id='login-link' to='/dashboard'>
          Teams
        </Link>
      </div>
      {/* <div id='nav-link-item'>
        <Link id='login-link' to='/games'>
          Games
        </Link>
      </div> */}
      <div id='nav-link-item'>
        <Link id='less-link' to='/support'>
          Support
        </Link>
      </div>
      <div id='nav-link-item'>
        <Link id='less-link' to='/pricing'>
          Pricing
        </Link>
      </div>
      <div id='nav-link-item'>
        <div id='less-link' onClick={logOut}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <div>
      {localStorage.getItem('token') && <UserNav />}
      {!localStorage.getItem('token') && <MainNav />}
    </div>
  );
}

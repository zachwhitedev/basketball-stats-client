import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import basketball from '../../assets/img/basketball.png';

export default function Navbar() {
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
}
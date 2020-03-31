import React, { useEffect } from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';

import RegisterUser from './RegisterUser/index';

import Navbar from '../Navbar/index';

export default function RegisterPage(props) {
  return (
    <div id='register-page-container'>
      <Navbar />
      <RegisterUser />
    </div>
  );
}
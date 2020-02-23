import React, { useEffect, useState } from 'react';
import './RegisterUser.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { registerUser, clearErrors } from './registerUserActions';
import Axios from 'axios';
import sendemail from '../../../assets/img/sendemail.png';

export default function RegisterUser(props) {

  const[state, setState]=useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmpassword: '',
    validationError: '',
    completed: false,
    redirect: false
  })

  const { dispatch } = props;

  const handleContinue = () => {
    setState({
      ...state,
      redirect: true
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(state.password !== state.confirmpassword){
      setState({
        ...state,
        validationError: 'Entered passwords do not match.'
      })
      return;
    } else if(!state.email || !state.email.includes('@') || !state.email.includes('.')){
      setState({
        ...state,
        validationError: 'Please enter a valid email.'
      })
      return;
    } else if(!state.email || !state.firstname || !state.lastname || !state.password || !state.confirmpassword){
      setState({
        ...state,
        validationError: 'Please enter all fields.'
      })
      return;
    } else {
      const user = {
        email: state.email,
        firstname: state.firstname,
        lastname: state.lastname,
        password: state.password
      };
      dispatch(registerUser(user));
      setState({
        ...state,
        completed: true
      })
    }
  }

  const onChange = e => {
    setState({ 
      ...state, 
      [e.target.name]: e.target.value,
      validationError: ''
    });
    dispatch(clearErrors());
  };
  
  if(!state.completed){
    return(
    <div id='registeruser-page-content'>
        <div id='registeruser-form'>
          <p id='create-your-account'>Create your account.</p>
          <p id='already-have-account'>Already have an account? <Link id='registeruser-already-account' to='/login'>Sign in</Link></p>
          <div id='registeruser-input-item'>
            <span id='registeruser-input-label'>Email</span>
            <input name='email' id='registeruser-input' type='text' onChange={(e) => onChange(e)}></input>
          </div>
          <div id='registeruser-input-item'>
            <span id='registeruser-input-label'>First Name</span>
            <input name='firstname' id='registeruser-input' type='text' onChange={(e) => onChange(e)}></input>
          </div>
          <div id='registeruser-input-item'>
            <span id='registeruser-input-label'>Last Name</span>
            <input name='lastname' id='registeruser-input' type='text' onChange={(e) => onChange(e)}></input>
          </div>
          <div id='registeruser-input-item'>
            <span id='registeruser-input-label'>Password</span>
            <input name='password' id='registeruser-input' type='password' onChange={(e) => onChange(e)}></input>
          </div>
          <div id='registeruser-input-item'>
            <span id='registeruser-input-label'>Confirm Password</span>
            <input name='confirmpassword' id='registeruser-input' type='password' onChange={(e) => onChange(e)}></input>
          </div>
          <div id='registeruser-validation-error'>
            {state.validationError ? state.validationError : props.registerError}
          </div>
          <div id='create-account-btn' onClick={(e) => handleSubmit(e)}>
            Create account
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div id='registeruser-page-content'>
        {state.redirect && <Redirect to='/login'/>}
        <div id='await-confirm'>
          <h2>Confirm your email.</h2>
          <img src={sendemail}/>
          <h3>Thanks for signing up!</h3>
          <p>Please <b>check your inbox</b> for a confirmation email that will allow you to continue logging in. After clicking the <b>confirmation link</b>, click <span id='continue-btn-small'>Continue</span>.</p>
          <div id='continue-btn-big' onClick={() => handleContinue()}>
            Continue
          </div>
        </div>
      </div>
    )
  }
}
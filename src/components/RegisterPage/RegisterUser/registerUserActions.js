const axios = require('axios');

export function registerUser(newUser) {
  return {
    type: 'REGISTER_USER',
    payload: axios.post('/register', newUser)
  }
}

export function clearErrors() {
  return {
    type: 'CLEAR_ERRORS',
    payload: ''
  };
}


const axios = require('axios');

export function registerUser(newUser) {
  console.log('newUser', newUser)
  return {
    type: 'REGISTER_USER',
    payload: axios.post('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/register', newUser)
  }
}

export function clearErrors() {
  return {
    type: 'CLEAR_ERRORS',
    payload: ''
  };
}


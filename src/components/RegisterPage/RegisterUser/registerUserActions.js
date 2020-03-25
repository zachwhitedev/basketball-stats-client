import { api } from '../../../utilities';
const axios = require('axios');

export function registerUser(newUser) {
  return {
    type: 'REGISTER_USER',
    payload: JSON/parse(axios.post(api + '/register', newUser))
  }
}

export function clearErrors() {
  return {
    type: 'CLEAR_ERRORS',
    payload: ''
  };
}


import { api } from '../../../utilities';
const axios = require('axios');


export function getUserData(id) {
  return {
    type: 'GET_USER_DATA',
    payload: axios.get(api +
      `/test/getUserData/${id}`
    )
  };
}
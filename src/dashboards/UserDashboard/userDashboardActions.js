const axios = require('axios');

export function getUserData(id) {
  return {
    type: 'GET_USER_DATA',
    payload: axios.get(`https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/getdata/${id}`)
  };
}
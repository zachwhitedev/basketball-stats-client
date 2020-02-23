const defaultState = {
    id: '',
    firstName: '',
    lastName: ''
  };
  
  export default function userDashboardReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_USER_DATA_FULFILLED': {
        return {
          ...state,
          id: payload.data[0].id,
          firstName: payload.data[0].firstname,
          lastName: payload.data[0].lastname
        };
      }
  
      case 'GET_USER_DATA_REJECTED': {
        console.log('there was a problem getting this user\'s data')
      }

      default: {
        return state;
      }
    }
  }
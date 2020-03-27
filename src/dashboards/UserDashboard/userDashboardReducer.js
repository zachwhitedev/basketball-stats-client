const defaultState = {
    teams: {
      data: {
        teamdata: {}
      }
    },
    error: ''
  };
  
  export default function userDashboardReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_USER_DATA_FULFILLED': {
        return {
          ...state,
          teams: payload
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
const defaultState = {
    error: '',
    data: {
      teams: [],
      players: []
    },
    selectedTeam: {}
  };
  
  export default function userDashboardReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_USER_DATA_FULFILLED': {
        return {
          ...state,
          data: payload.data.data
        };
      }

      case 'SELECT_TEAM': {
        return {
          ...state,
          selectedTeam: payload
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
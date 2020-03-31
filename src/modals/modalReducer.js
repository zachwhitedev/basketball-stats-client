const defaultState = {
    teamAdded: {},
    playersAdded: {}
  };
  
  export default function modalReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'ADD_NEW_TEAM_FULFILLED': {
        return {
          ...state,
          teamAdded: payload.data.body
        };
      }

      case 'ADD_NEW_PLAYERS_FULFILLED': {
        return {
          ...state,
          playersAdded: payload.data.body
        };
      }
  
      default: {
        return state;
      }
    }
  }
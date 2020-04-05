const defaultState = {
    teamAdded: {},
    gameAdded: {},
    playersAdded: {}
  };
  
  export default function modalReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'ADD_NEW_TEAM': {
        return {
          ...state,
          teamAdded: payload.data.body
        };
      }
      case 'ADD_NEW_GAME': {
        return {
          ...state,
          gameAdded: payload.data.body
        };
      }

      case 'ADD_NEW_PLAYERS': {
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
const defaultState = {
    playerGameData: {}
  };
  
  export default function cardsReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_PLAYERGAME_DATA': {
        return {
          ...state,
          playerGameData: payload.data.body
        };
      }

      default: {
        return state;
      }
    }
  }
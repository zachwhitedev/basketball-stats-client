const defaultState = {
    playerGameData: {},
    tempEvent: {}
  };
  
  export default function cardsReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_PLAYERGAME_DATA': {
        return {
          ...state,
          playerGameData: payload.data.body.playerData
        };
      }

      case 'ADD_TEMP_GAME_EVENT': {
        return {
          ...state,
          tempEvent: payload
        }
      }

      case 'CLEAR_TEMP_GAME_EVENT': {
        return {
          ...state,
          tempEvent: {}
        }
      }

      default: {
        return state;
      }
    }
  }
const defaultState = {
  error: '',
  data: {
    teams: [],
    players: []
  },
  selectedTeam: {
    id: '',
    players: [],
    games: [],
    fetched: false
  }
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

    case 'GET_CURRENT_TEAM_FULFILLED': {
      return {
        ...state,
        selectedTeam: {
          id: payload.data.body.teamid,
          name: payload.data.body.name,
          players: payload.data.body.players,
          games: payload.data.body.games,
          fetched: true
        }
      };
    }

    case 'GET_USER_DATA_REJECTED': {
      console.log("there was a problem getting this user's data");
    }

    default: {
      return state;
    }
  }
}

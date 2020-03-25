const defaultState = {
  userData: [],
  errorString: ''
};

export default function registerUserReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    ///////////////////////////////////////////////////////////

    case 'REGISTER_USER_FULFILLED': {
      return {
        ...state,
        userData: JSON.parse(payload),
        errorString: payload.data.body.error
      };
    }

    case 'REGISTER_USER_REJECTED': {
      console.log('There was an issue registering this user.');
      return {
        ...state,
        errorString: payload.data.error
      };
    }

    ///////////////////////////////////////////////////////////

    case 'CLEAR_ERRORS': {
      return {
        ...state,
        errorString: ''
      };
    }

    ///////////////////////////////////////////////////////////

    default: {
      return state;
    }
  }
}

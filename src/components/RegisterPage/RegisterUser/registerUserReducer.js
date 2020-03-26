const defaultState = {
  userData: {
    error: ''
  },
  completed: false,
  errorString: ''
};

export default function registerUserReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    ///////////////////////////////////////////////////////////

    case 'REGISTER_USER_FULFILLED': {
      const data = payload.data;
        return {
          ...state,
          userData: data,
          errorString: data.error,
          completed: true
        };
      }

    ///////////////////////////////////////////////////////////

    case 'REGISTER_USER_REJECTED': {
      return {
        ...state,
        errorString: 'Promise rejected.',
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

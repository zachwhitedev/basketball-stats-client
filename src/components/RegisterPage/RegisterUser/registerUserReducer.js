const defaultState = {
  errorString: ''
};

export default function registerUserReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    ///////////////////////////////////////////////////////////

    case 'REGISTER_USER_FULFILLED': {
      return {
        ...state,
        errorString: '',
        userData: JSON.parse(payload.data.body)
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
      console.log('sdfvsdvsdfvsdfvsvf')
      return state;
    }
  }
}

const defaultState = {
    userData: {},
    errorString: ''
  };
  
  export default function loginPageReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      ///////////////////////////////////////////////////////////
  
      case 'LOGIN_USER': {
        return {
          ...state,
          userData: payload
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
import UserActionTypes from "./user.type";
const INITIAL_STATE = {
  currentUser: null,
  error: null
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        currentUser: null,
        error: null
      };
    }
    case UserActionTypes.SIGN_UP_FAILUER:
    case UserActionTypes.SIGN_OUT_FAILUER:
    case UserActionTypes.SIGN_IN_FAILUER:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;

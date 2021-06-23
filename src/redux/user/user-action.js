import UserActionTypes from "./user.type";
// export const setCurrentUser = (user) => ({
//   type: UserActionTypes.SET_CURRENT_USER,
//   payload: user
// });

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailuer = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILUER,
  payload: error
});

//SIGN IN WITH EMAIL AND PASS WORD

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

// export const emailSignInSuccess = (user) => ({
//   type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
//   payload: user
// });

// export const emailSignInFailuer = (error) => ({
//   type: UserActionTypes.EMAIL_SIGN_IN_FAILUER,
//   payload: error
// });

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailuer = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILUER,
  payload: error
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailuer = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILUER,
  payload: error
});

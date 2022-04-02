import {userConstants} from "../constants";

let token = localStorage.getItem('token');
const initialState = token ? {loggedIn: true, token} : {};

export function authentication(state = initialState, action: any) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        user: null
      };
    case userConstants.LOGOUT:
      return {
        loggingIn: false,
        loggedIn: false,
        user: null
      };
    default:
      return state
  }
}

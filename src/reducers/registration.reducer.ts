import {userConstants} from "../constants";

export function registration(state = {}, action: any) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        registering: true,
        user: action.user
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        user: action.user
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        user: null
      };
    default:
      return state
  }
}

import {alertConstants} from "../constants";

export function alert(state = {}, action: any) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: alertConstants.SUCCESS,
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: alertConstants.ERROR,
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}

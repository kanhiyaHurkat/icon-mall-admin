import {alertActions} from "./alert.action";
import {userConstants} from "../constants";
import {login, logout, register} from "../service/auth.service";

function loginAction(username: string, password: string, dispatch: any): Promise<any> {
  dispatch(request({username}));
  return login(username, password).then(
    (response: any) => {
      if (response.token) {
        dispatch(success({...response, username}));
        dispatch(alertActions.success('Logged in Successfully'));
        return Promise.resolve(response);
      } else {
        const errorMessage = response.data.error || response.data.message;
        dispatch(failure(response));
        dispatch(alertActions.error(errorMessage));
        return Promise.reject(response);
      }

    },
    (error: any) => {
      const errorMessage = error.response.error || error.response.message;
      dispatch(failure(error));
      dispatch(alertActions.error(errorMessage));
      return Promise.reject(errorMessage)
    }
  );

  function request(user: any) {
    return {type: userConstants.LOGIN_REQUEST, user}
  }

  function success(user: any) {
    return {type: userConstants.LOGIN_SUCCESS, user}
  }

  function failure(error: any) {
    return {type: userConstants.LOGIN_FAILURE, error}
  }
}

function logoutAction(dispatch: any) {
  logout();
  dispatch(success());

  function success() {
    return {type: userConstants.LOGOUT}
  }
}

function registerAction(user: any, dispatch: any): Promise<any> {
  dispatch(request(user));
  return register(user.username, user.email, user.password).then(
    (user: any) => {
      dispatch(success(user.data));
      dispatch(alertActions.success('Registration successful'));
      return Promise.resolve(user);
    },
    (error: any) => {
      const errorMessage = error.response.error || error.response.message;
      dispatch(failure(error));
      dispatch(alertActions.error(errorMessage));
      return Promise.reject(errorMessage)
    }
  );

  function request(user: any) {
    return {type: userConstants.REGISTER_REQUEST, user}
  }

  function success(user: any) {
    return {type: userConstants.REGISTER_SUCCESS, user}
  }

  function failure(error: any) {
    return {type: userConstants.REGISTER_FAILURE, error}
  }
}

export const userActions = {
  loginAction,
  logoutAction,
  registerAction
};

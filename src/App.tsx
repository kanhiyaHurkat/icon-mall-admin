import React from 'react';
import './App.css';
import Login from "./components/auth/login/Login";
import {Route, Routes, useNavigate,} from "react-router-dom";
import Home from "./components/home/Home";
import Register from "./components/auth/register/Register";
import ForgotPassword from "./components/auth/forgot-password/ForgotPassword";
import {PrivateRoute} from "./components/auth/private-route/PrivateRoute";
import TopNavigation from "./components/layout/TopNavigation";
import {alertActions} from "./actions/alert.action";
import {connect} from "react-redux";
import {AuthGuardRoute} from "./components/auth/auth-guard";
import {userActions} from "./actions/user.action";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App(props: any) {

  const navigate = useNavigate();

  function handleLogout() {
    const {dispatch} = props;
    userActions.logoutAction(dispatch);
    navigate('/login');
  }

  return (
    <>
      <TopNavigation logout={handleLogout}/>
      <Routes>
        <Route path="/home" element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        }/>
        <Route path="/login" element={
          <AuthGuardRoute>
            <Login/>
          </AuthGuardRoute>
        }/>
        <Route path="/register" element={
          <AuthGuardRoute>
            <Register/>
          </AuthGuardRoute>
        }/>
        <Route path="/forgot-password" element={
          <AuthGuardRoute>
            <ForgotPassword/>
          </AuthGuardRoute>
        }/>
      </Routes>
      <ToastContainer/>
    </>
  );
}

function mapState(state: any) {
  const {alert} = state;
  return {alert};
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export default connectedApp;

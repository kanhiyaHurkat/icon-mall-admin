import React from "react";
import {connect} from "react-redux";

export function Home() {
  return (
    <><h1>This is Home Page</h1></>
  );
}

function mapStateToProps(state: any) {
  const {loggedIn} = state.authentication;
  const {message} = state.alert;
  return {
    loggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Home);

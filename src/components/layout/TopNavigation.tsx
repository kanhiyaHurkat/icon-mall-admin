import {CNav, CNavItem, CNavLink} from "@coreui/react";
import React from "react";
import {userActions} from "../../actions/user.action";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";

// @ts-ignore
function TopNavigation(props) {

  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate();

  function handleLogout() {
    const {dispatch} = props;
    userActions.logoutAction(dispatch);
    navigate('/login');
  }

  return (
    isAuthenticated ?
      <CNav variant="pills" className="justify-content-end px-4 py-3">
        <CNavItem className={'d-flex'}>
          <CNavLink type='button' className={'me-3'}>
            Current User
          </CNavLink>
          <CNavLink type='button' onClick={handleLogout} active>
            Logout
          </CNavLink>
        </CNavItem>
      </CNav> : <></>
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

export default connect(mapStateToProps)(TopNavigation);

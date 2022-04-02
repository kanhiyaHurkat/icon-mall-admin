import {CButton, CForm, CFormInput, CInputGroup, CInputGroupText} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {freeSet} from "@coreui/icons";
import React, {ChangeEvent, useState} from "react";
import {connect} from "react-redux";
import './Login.css'
import {useNavigate} from "react-router-dom";
import {userActions} from "../../../actions/user.action";
import {errorToast, successToast} from "../../../service/show-toast";

export function Login(props: any) {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setEmail(() => event.target.value)
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setPassword(() => event.target.value)
  }

  function handleRegister() {
    navigate("/register");
  }

  async function handleLogin(event: any) {
    event.preventDefault()
    const {dispatch} = props;

    dispatch(userActions.loginAction(email, password, dispatch).then((response: any) => {
      if (response.token) {
        localStorage.setItem('token', response.token)
        navigate("/home");
        successToast(response.message);
      }
    }).catch((error: any) => {
      errorToast(error);
    }))
  }

  function handleForgotPassword() {
    navigate("/forgot-password");
  }

  return (
    <div className={'bg-light min-vh-100 d-flex flex-row align-items-center'}>
      <div className={'container'}>
        <div className={'row justify-content-center'}>
          <div className={'col-md-8'}>
            <div className={'card-group'}>
              <div className={'card p-4'}>
                <h1>Login</h1>
                <span>Sign In to your account</span>
                <CForm className={'mt-3'}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText className={'bg-secondary text-white'}>
                      <CIcon className={'input-icon'} icon={freeSet.cilPeople}/>
                    </CInputGroupText>
                    <CFormInput onChange={(event) => handleEmailChange(event)} type="email"
                                id="email" placeholder="name@example.com"/>
                  </CInputGroup>

                  <CInputGroup>
                    <CInputGroupText className={'bg-secondary text-white'}>
                      <CIcon className={'input-icon'} icon={freeSet.cilLockLocked}/>
                    </CInputGroupText>
                    <CFormInput onChange={(event) => handlePasswordChange(event)}
                                type="password" id="password" placeholder="Password"/>
                  </CInputGroup>

                  <div className={'d-flex justify-content-between mt-4'}>
                    <CButton onClick={(event) => handleLogin(event)} type="submit"
                             color="primary">Login</CButton>
                    <CButton onClick={handleForgotPassword} color="link" shape="rounded-pill">Forgot Password?</CButton>
                  </div>
                </CForm>
              </div>
              <div className={'align-items-center bg-primary card d-flex justify-content-between p-4 py-5 text-white'}>
                <h2>Sign Up</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.</span>
                <CButton onClick={handleRegister} type="button" color="info">Register Now!</CButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default connect(mapStateToProps)(Login);

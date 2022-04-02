import {CButton, CForm, CFormInput, CInputGroup, CInputGroupText} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {freeSet} from "@coreui/icons";
import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {userActions} from "../../../actions/user.action";
import {errorToast, successToast} from "../../../service/show-toast";

export function Register(props: any) {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setUsername(() => event.target.value)
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setEmail(() => event.target.value)
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setPassword(() => event.target.value)
  }

  async function handleRegister(event: any) {
    event.preventDefault()
    const {dispatch} = props;
    dispatch(userActions.registerAction({username, email, password}, dispatch).then((response: any) => {
      if (response.status === 409) {
        errorToast(response.data.message);
      } else {
        navigate("/login");
        successToast(response.message);
      }

    }).catch((error: any) => {
      errorToast(error);
    }))
  }

  async function handleLogin() {
    navigate("/login");
  }

  return (
    <div className={'bg-light min-vh-100 d-flex flex-row align-items-center'}>
      <div className={'container'}>
        <div className={'row justify-content-center'}>
          <div className={'col-md-8'}>
            <div className={'card-group'}>
              <div className={'card p-4 bg-primary text-white'}>
                <h1>Registration</h1>
                <span>Create your account</span>
                <CForm className={'mt-3'}>

                  <CInputGroup className="mb-3">
                    <CInputGroupText className={'bg-secondary text-white'}>
                      <CIcon className={'input-icon'} icon={freeSet.cilPeople}/>
                    </CInputGroupText>
                    <CFormInput onChange={(event) => handleUsernameChange(event)}
                                type="text" id="username" placeholder="Username"/>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText className={'bg-secondary text-white'}>
                      <CIcon className={'input-icon'} icon={freeSet.cilPeople}/>
                    </CInputGroupText>
                    <CFormInput onChange={(event) => handleEmailChange(event)}
                                type="email" id="email" placeholder="name@example.com"/>
                  </CInputGroup>

                  <CInputGroup>
                    <CInputGroupText className={'bg-secondary text-white'}>
                      <CIcon className={'input-icon'} icon={freeSet.cilLockLocked}/>
                    </CInputGroupText>
                    <CFormInput onChange={(event) => handlePasswordChange(event)}
                                type="password" id="password" placeholder="Password"/>
                  </CInputGroup>

                  <div className={'d-flex justify-content-between mt-4'}>
                    <CButton onClick={handleRegister} type="submit" color="info">Sign Up</CButton>
                  </div>
                </CForm>
              </div>
              <div className={'align-items-center card d-flex justify-content-between p-4 py-5'}>
                <h2>Login</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.</span>
                <CButton onClick={handleLogin} type="button" color="primary">Login Now!</CButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state: any) {
  const {registering} = state.registration;
  const {message} = state.alert;
  return {
    registering,
    message,
  };
}

export default connect(mapStateToProps)(Register);

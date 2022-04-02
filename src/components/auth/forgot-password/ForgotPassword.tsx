import {CButton, CForm, CFormInput, CInputGroup, CInputGroupText} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {freeSet} from "@coreui/icons";
import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

export function ForgotPassword() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setEmail(() => event.target.value)
  }

  async function handleLogin() {
    navigate("/login");
  }

  function handleForgotPassword(event: any) {
    event.preventDefault();
    console.log(email);
  }

  return (
    <div className={'bg-light min-vh-100 d-flex flex-row align-items-center'}>
      <div className={'container'}>
        <div className={'row justify-content-center'}>
          <div className={'col-md-8'}>
            <div className={'card-group'}>
              <div className={'card p-4'}>
                <h1>Forgot Password</h1>
                <CForm className={'mt-3'}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText className={'bg-secondary text-white'}>
                      <CIcon className={'input-icon'} icon={freeSet.cilPeople}/>
                    </CInputGroupText>
                    <CFormInput onChange={(event) => handleEmailChange(event)} type="email"
                                id="email" placeholder="name@example.com"/>
                  </CInputGroup>

                  <div className={'d-flex justify-content-between mt-4'}>
                    <CButton onClick={(event) => handleForgotPassword(event)}
                             type="submit" color="primary">Send Email</CButton>
                    <CButton onClick={handleLogin} color="link" shape="rounded-pill">Back To Login</CButton>
                  </div>
                </CForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

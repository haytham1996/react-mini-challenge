import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import avatar from "../../assets/images/avatar.png"
import email from "../../assets/images/email.jpg"
import pass from "../../assets/images/pass.png"
import './login.css';

function Login() {

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/home')
  }
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="user name" className="name" />
            </div>
            <div className="login-button">
              <button onClick={navigateToHome}> Login </button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>


          </div>
        </div>


      </div>
    </div>
  )
}

export default Login
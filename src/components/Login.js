import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Header color="black"/>
        <div className="login-container">
          <div className="login-head">
            <h1>Account LogIn</h1>
            <p>Please enter your User/Email & Password</p>
          </div>
          <div className="login-signup-form-box">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username or Email"/>
            </div>
            <div className="form-group bottom-gap">
              <input type="test" className="form-control" placeholder="Password"/>
            </div>
            <div className="forgot-password-text">
              <a href="#">Forget Password?</a>
            </div>
            <button className='primary-btn'>Login Now</button>
            <p className="bottom-text">don't have an account? <a href="#">Register Here</a></p>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default Login;
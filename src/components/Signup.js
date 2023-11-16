import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Header color="black" />
      <div className="login-container">
        <div className="login-head">
          <h1>Create Account</h1>
          <p>Already have account? <a href="#">Login</a></p>
        </div>
        <div className="login-signup-form-box">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Mobile No" />
          </div>
          <div className="form-group">
            <input type="test" className="form-control" placeholder="Create Password" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Confirm Password" />
          </div>
          <button className='primary-btn signup'>Signup Now</button>
          <p className="bottom-text">Or Login With</p>
          <ul className="login-social">
            <li>
              <a href="#">
                <i className="fa fa-facebook"/>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"/>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login;
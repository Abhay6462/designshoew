import React from 'react'

import fb1 from "../../Images/fblogo.png"
import gb1 from "../../Images/googlelogo.png"
import sh2 from "../../Images/sh2.jpg"
import  GoArrowLeft  from "../../Images/backArrow.png";

import '../Form/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
   
  return (
    <>
<div className="login-page">
  <div className="login-form">
    <div className="login-header">
      <div className='back-Arrow'><Link  to='/'><img src={GoArrowLeft} alt="" /></Link></div>
      <h1>Login Now</h1>
      <h5>Please Login to enter the app</h5>
    </div>
    <div className="login-instantly">
      <h5>Login Instantly</h5>
      <div>
        <div><img src={gb1} alt='' /></div>
        <div><img src={fb1} alt='' /></div>
      </div>
    </div>
    <div className="input-fields">
      <div>Email</div>
      <div><input type="text" /></div>
      <div>Password</div>
      <div><input type="password" /></div>
    </div>
    <div className="remember-forgot">
      <div><input type="radio" />  Remember me</div>
      <div><Link className='custom-link' to="/forgetpass">Forget Password?</Link></div>
    </div>
    <div className="login-button">
      <button>Login</button>
    </div>
    <div className="signup-link">
      <div>Don't have an Account?</div>
      <div><Link className='custom-link' to="/signup">Sign Up</Link></div>
    </div>
  </div>
  <div className="login-image">
    <img src={sh2} alt="" />
  </div>
</div>
    </>
  )
}

export default Login
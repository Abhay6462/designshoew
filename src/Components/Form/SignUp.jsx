import React from 'react'

import fb1 from "../../Images/fblogo.png"
import gb1 from "../../Images/googlelogo.png"
import sh1 from "../../Images/sh1.png"
import  GoArrowLeft  from "../../Images/backArrow.png";


import '../Form/SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="login-page">
  <div className="login-form">
    <div className="login-header">
      <div className='back-Arrow'><Link  to='/'><img src={GoArrowLeft} alt="" /></Link></div>
      <h1>Sign up Now</h1>
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
    <div>Name</div>
      <div><input type="text" /></div>
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
      <button>Sign up</button>
    </div>
    <div className="signup-link">
      <div>Already have an Account?</div>
      <div><Link className='custom-link' to="/login">Login</Link></div>
    </div>
  </div>
  <div className="login-image">
    <img src={sh1} alt="" />
  </div>
</div>
  )
}

export default SignUp
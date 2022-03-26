import React from 'react';
import { Link } from 'react-router-dom';
import { InputField } from '../../components/InputField';
import "../../stylesheets/login-signup.css";

function Login() {
  return (
    <div className="pattern-bg p-4">
      <div className='login-signup-form my-8 p-4 w-80p'>
      <h3 className='text-md font-semibold'>Login</h3>
      <p>Enter your credentials to access your account.</p>
      <form className='mx-auto my-8'>
        <InputField type="email" inputId="email" name="Email-id:" placeholder="jhon@gmail.com" /> 
        <InputField type="password" inputId="password" name="Password:" placeholder="********" />
        <button className="btn btn-primary">Log In</button>
      </form>
      <p>Don't have an account ? <Link  className='move-text' to='/signup'>Sign-up</Link></p>
      </div>
    </div>
  )
}

export {Login};
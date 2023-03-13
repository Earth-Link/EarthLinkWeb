import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  
  const signinHandler = () => {
    navigate('/homepage');
  };

  return (
      <div className='login'> 
      {login ? (
        <div className='signin'>
          <h3 id='signintxt'>Let's Sign into your Account!</h3>

          <form className='form-signin' onSubmit={signinHandler}>
            <div className='email'>
              <input
                type='email'
                id='inputEmail'
                className='form-control'
                placeholder='Email address'
                required
              />
            </div>
            <div className='password'>
              <input
                type='password'
                id='inputPassword'
                className='form-control'
                placeholder='Password'
                required
              />
            </div>
            <div className='submitButton'>
              <button
                className='btn-lg'
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
          <p id='signuptxt'>
            Create an Account{' '}
            <a href='#' onClick={() => setLogin()}>
              Sign Up
            </a>
          </p>
        </div>
      ) : (
        <div className='signup'>
          <h3 id='strtxt'>Create an Account</h3>
          <form className='form-signup'>
            <div className='firstname'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='First name'
                required
              />
            </div>
            <div className='lastname'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Last name'
                required
              />
            </div>
            <div className='email'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Email address'
                required
              />
            </div>
            <div className='password'>
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='Password'
                required
              />
            </div>
            <div>
              <input
                type='password'
                name='confirmPassword'
                className='form-control'
                placeholder='Confirm Password'
                required
              />
            </div>
            <div className='submitButton'>
              <button
                className='btn-lg'
                type='submit'
              >
                Sign Up
              </button>
            </div>
          </form>
          <p id='logintxt'>
            Already have an account?{' '}
            <a href='#' onClick={() => setLogin(true)}>
              Login
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;

import React, { useState } from 'react';

const Login = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className='login/signup'></div>

      {login ? (
        <div className='signin'>
          <h3 id='signintxt'>Let's Sign into your Account!</h3>

          <form className='form-signin'>
            <div className='email'>
              <label className='form__label' htmlFor='email'>
                {' '}
                Email{' '}
              </label>
              <input
                type='email'
                id='inputEmail'
                className='form-control'
                placeholder='Email address'
                required
              />
            </div>
            <div className='password'>
              <label className='form__label' htmlFor='password'>
                {' '}
                Password{' '}
              </label>
              <input
                type='password'
                id='inputPassword'
                className='form-control'
                placeholder='Password'
                required
              />
            </div>
            <div>
              <button
                className='btn btn-lg btn-primary btn-block'
                type='submit'
              >
                Sign in
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
              <label className='form__label' htmlFor='firstname'>
                {' '}
                First Name{' '}
              </label>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='First name'
                required
              />
            </div>
            <div className='lastname'>
              <label className='form__label' htmlFor='lastname'>
                {' '}
                Last Name{' '}
              </label>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Last name'
                required
              />
            </div>
            <div className='email'>
              <label className='form__label' htmlFor='email'>
                {' '}
                Email{' '}
              </label>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Email address'
                required
              />
            </div>
            <div className='password'>
              <label className='form__label' htmlFor='password'>
                {' '}
                Password{' '}
              </label>
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='Password'
                required
              />
            </div>
            <div>
              <label className='form__label' htmlFor='confirmPassword'>
                {' '}
                Confirm Password{' '}
              </label>
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
                className='btn btn-lg btn-primary btn-block'
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
    </>
  );
};

export default Login;

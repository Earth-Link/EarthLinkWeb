import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //SETTING INITIAL STATE FOR WETHER A USER IS LOGGED IN OR NOT, WHICH WILL OFC DEFAULT TO FALSE, THE EMAIL AND PASSWORD WILL INITIALLY BE SET TO AN EMPTY STRING
  const [login, setLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signinHandler = (event) => {
    //PREVENT PAGE FROM RELOADING
    event.preventDefault();

    //CREATE A REQBODY OBJECT TO SEND TO THE BACKEND, IT WILL HAVE BOTH THE TYPED IN EMAIL AND PASSWORD, SINCE THE STATE OF BOTH IS SET AS THEY ARE TYPED.
    const reqBody = {
      email,
      password,
    };

    //POST REQ TO THE BACKEND, STILL NEED TO ADD LOGIC FOR WHEN RESPONSE IS RECEIVED
    fetch("/user/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    }).then((res) => {
      if (res.status !== 400) {
        res.json().then((data) => {
          setUser(data);
          setLoggedIn(true);
        });
      } else return;
    });
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password, secondPassword);
    const reqBody = {
      firstName,
      lastName,
      email,
      password,
      secondPassword,
    };
    fetch("/user/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    }).then((res) => {
      res.json().then((data) => {
        setUser(data);
        setLoggedIn(true);
      });
    });
  };

  //CHANGE HANDLERS FOR THE INPUT FIELDS FOR THE EMAIL AND PASSWORD, ON EVERY CHANGE IT WILL SET THE STATE OF THE EMAIL AND PASSWORD TO THE TYPED IN EMAIL AND PASSWORD
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPassChangeHandler = (event) => {
    setSecondPassword(event.target.value);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div className="login">
      {login ? (
        <div className="signin">
          <h3 id="signintxt">Let's Sign into your Account!</h3>

          <form className="form-signin" onSubmit={signinHandler}>
            <div className="email">
              <input
                onChange={emailChangeHandler}
                type="email"
                name="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required
              />
            </div>
            <div className="password">
              <input
                onChange={passChangeHandler}
                type="password"
                name="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="submitButton">
              {loggedIn ? (
                <button className="btn-lg" type="submit">
                  <Link state={user} to="/homepage">
                    Login
                  </Link>
                </button>
              ) : (
                <button className="btn-lg" type="submit">
                  Login
                </button>
              )}
            </div>
          </form>
          <p id="signuptxt">
            Create an Account{" "}
            <a href="#" onClick={() => setLogin()}>
              Sign Up
            </a>
          </p>
        </div>
      ) : (
        <div className="signup">
          <h3 id="strtxt">Create an Account</h3>
          <form className="form-signup" onSubmit={signUpHandler}>
            <div className="firstname">
              <input
                onChange={firstNameChangeHandler}
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First name"
                required
              />
            </div>
            <div className="lastname">
              <input
                onChange={lastNameChangeHandler}
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last name"
                required
              />
            </div>
            <div className="email">
              <input
                onChange={emailChangeHandler}
                type="email"
                name="email"
                className="form-control"
                placeholder="Email address"
                required
              />
            </div>
            <div className="password">
              <input
                onChange={passChangeHandler}
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input
                onChange={confirmPassChangeHandler}
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="submitButton">
              {loggedIn ? (
                <button className="btn-lg" type="submit">
                  <Link state={user} to="/homepage">
                    Login
                  </Link>
                </button>
              ) : (
                <button className="btn-lg" type="submit">
                  Sign Up
                </button>
              )}
            </div>
          </form>
          <p id="logintxt">
            Already have an account?{" "}
            <a href="#" onClick={() => setLogin(true)}>
              Login
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;

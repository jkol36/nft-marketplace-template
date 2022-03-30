import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Register.module.sass";
import TextInput from "../../components/TextInput";
import cn from "classnames";
import Icon from "../../components/Icon";

const Register = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [emailError, setEmailError] = useState(false);
  // const [loginError, setLoginError] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      console.log("Please enter all fields");
      //setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      console.log("Passwords do not match");
      //setAlert("Passwords do not match", "danger");
    } else {
      console.log(user);
      // register({
      //   name,
      //   email,
      //   password,
      // });
    }
  };

  // const handleClick = () => {
  //   if (
  //     new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email) ===
  //     false
  //   ) {
  //     setEmailError(true);
  //   } else {
  //     setEmailError(false);
  //   }
  // };

  // const handleLogin = () => {
  //handleClick();

  /*
  if(email.current.value==="Raheel.ahmed@live.com" && password.current.value==="password"){
    console.log("success")
    setLoginError(false)
  }
  else {
    setLoginError(true)
  }
*/
  //   axios
  //     .post("http://localhost:4000/login", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((Response) => {
  //       setLoginError(false);
  //       console.log(Response);
  //     })
  //     .catch((err) => {
  //       setLoginError(true);
  //       console.log(err);
  //     });
  // };

  return (
    <div className="section-pt80">
      <div className="container center-1200">
        <div className={styles.head}>
          <Link className={styles.back} to="/">
            <Icon name="arrow-prev" size="24" />
            <div className={cn("font-48", styles.stage)}>Register</div>
          </Link>
        </div>

        <div className="marginleft">
          {/* {emailError ? (
            <div className="alert alert-primary w-50" role="alert">
              <p>
                <strong>Email is not Valid</strong> enter valid Email.{" "}
              </p>
            </div>
          ) : (
            <div></div>
          )}

          {loginError ? (
            <div className="alert alert-primary w-50">
              <p>
                <strong>Invaled Email or Password</strong>{" "}
              </p>
            </div>
          ) : (
            <div></div>
          )} */}

          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="col-md-4 mb-30">
                <TextInput
                  className={styles.field}
                  label="Username"
                  name="username"
                  type="text"
                  // onChange={(e) => setEmail(e.target.value)}
                  value={username}
                  onChange={onChange}
                  placeholder="Jhon Doe"
                  required
                />
              </div>
              <div className="col-md-4 mb-30">
                <TextInput
                  className={styles.field}
                  label="EMAIL"
                  name="email"
                  type="email"
                  // onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  onChange={onChange}
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div className="col-md-4 mb-30">
                <TextInput
                  className={styles.field}
                  label="PASSWORD"
                  name="password"
                  type="password"
                  value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={onChange}
                  placeholder="Password"
                  required
                  minLength="6"
                />
              </div>
              <div className="col-md-4 mb-30">
                <TextInput
                  className={styles.field}
                  label="Confirm Password"
                  name="password2"
                  type="password"
                  value={password2}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={onChange}
                  placeholder="Password"
                  required
                  minLength="6"
                />
              </div>
              <br />
              <button
                type="submit"
                //value="Login"
                className="button-small header__upload"
                // onClick={() => handleLogin()}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

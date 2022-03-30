import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Login.module.sass";
import TextInput from "../../components/TextInput";
import cn from "classnames";
import Icon from "../../components/Icon";

const Login = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [emailError, setEmailError] = useState(false);
  // const [loginError, setLoginError] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      console.log("Please fill in all fields");
      //setAlert("Please fill in all Fields", "danger");
    } else {
      console.log(user);
      // login({
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
            <div className={cn("font-48", styles.stage)}>Login</div>
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

              <div className="col-md-4 mb-10">
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
                />
              </div>
              <br />
              <button
                type="submit"
                //value="Login"
                className="button-small header__upload"
                // onClick={() => handleLogin()}
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

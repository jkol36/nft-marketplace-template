import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Login.module.sass";
import TextInput from "../../components/TextInput";
import cn from "classnames";
import Icon from "../../components/Icon";
import Dropdown from "components/Dropdown";
import TextArea from "components/TextArea";

const Support = () => {
  const chainOptions = ["Ethereum", "Binance", "Polygon"];
  const [chain, setChain] = useState(chainOptions[0]);

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

  return (
    <div className="section">
      <div className="container center-1200">
        <div className={styles.head}>
          <Link className={styles.back} to="/">
            {/* <Icon name="arrow-prev" size="24" /> */}
            <div className={cn("font-48", styles.stage)}>Help & Support</div>
          </Link>
        </div>

        <div className="marginleft">
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="col-md-4 mb-30">
                <TextInput
                  className={styles.field}
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={onChange}
                  //placeholder="Your Email Address"
                  required
                />
              </div>

              <div className="col-md-4 mb-30">
                <TextInput
                  className={styles.field}
                  label="Subject"
                  name="subject"
                  type="text"
                  // value={email}
                  // onChange={onChange}
                  //placeholder="Subject of your request"
                  required
                />
              </div>

              <div className="col-md-4 mb-30">
                <TextInput
                  className={styles.field}
                  label="Wallet Address"
                  name="wallet"
                  type="text"
                  // value={email}
                  // onChange={onChange}
                  //placeholder="..."
                  required
                />
              </div>

              <div className="col-md-4 mb-30">
                <label htmlFor="" className={styles.label}>
                  Blockchain
                </label>
                <Dropdown
                  className={styles.dropdown}
                  value={chain}
                  setValue={setChain}
                  options={chainOptions}
                />
              </div>
              <div className="col-md-4 mb-30">
                <TextArea
                  className={styles.field}
                  label="Description"
                  name="description"
                  // onChange={(e) => setEmail(e.target.value)}
                  // value={email}
                  // onChange={onChange}
                  //placeholder="Please tell us more about your issue"
                  required
                />
              </div>
              <div className="col-md-4 mb-30">
                <TextInput
                  className={styles.field}
                  label="Attachments (Optional)"
                  name="attachment"
                  type="file"
                  // value={email}
                  // onChange={onChange}
                  //placeholder="..."
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;

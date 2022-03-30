import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./PageList.module.sass";

const PageList = () => {
  return (
    <div className={styles.page}>
      <div className={cn("container", styles.container)}>
        <p>
          <Link to="/">Home Page</Link>
        </p>
        <p>
          <Link to="/upload-variants">Upload Variants</Link>
        </p>
        <p>
          <Link to="/mint">Upload Details</Link>
        </p>
        <p>
          <Link to="/connect-wallet">Connect wallet</Link>
        </p>
        <p>
          <Link to="/faq">FAQ</Link>
        </p>
        <p>
          <Link to="/activity">Activity</Link>
        </p>
        <p>
          <Link to="/marketplace">Marketplace</Link>
        </p>
        <p>
          <Link to="/profile">Profile</Link>
        </p>
        <p>
          <Link to="/profile-edit">Profile Edit</Link>
        </p>
        <p>
          <Link to="/item">Item</Link>
        </p>
      </div>
    </div>
  );
};

export default PageList;

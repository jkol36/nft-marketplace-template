import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import { Elasticsearch } from "react-elasticsearch";

// import User from "./User";

const nav = [
  {
    url: "/marketplace",
    title: "Discover",
  },
  {
    url: "/faq",
    title: "How it works",
  },
  {
    url: "/item",
    title: "Create item",
  },
  {
    url: "/profile",
    title: "Profile",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert();
  };
  const handleNav = () => {
    setVisibleNav(!visibleNav);
  };

  return (
    <header className={styles.header}>
      <div
        className={cn(
          "container-20 header__center center-100",
          styles.container
        )}
      >
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="closedsea-logo123.svg"
            srcDark="./logo-white.png"
            alt="Closed Sea Logo"
            onClick={handleNav}
          />
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                className={styles.link}
                // activeClassName={styles.active}
                to={x.url}
                key={index}
                onClick={handleNav}
              >
                {x.title}
              </Link>
            ))}
          </nav>
          <form
            className={styles.search}
            action=""
            onSubmit={() => handleSubmit()}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search"
              required
            />
            <button onClick={() => localStorage.setItem('search', search)} className={styles.result}>
              <Icon name="search" size="20" />
            </button>
          </form>
          <Link
            className={cn("button-small", styles.button)}
            to="/upload-variants"
            onClick={handleNav}
          >
            Upload
          </Link>
        </div>
        <Notification className={styles.notification} />
        <Link
          className={cn("button-small header__upload", styles.button)}
          to="/upload-variants"
          onClick={handleNav}
        >
          Upload
        </Link>
        <Link
          className={cn(
            "button-stroke button-small header__connect",
            styles.button
          )}
          onClick={handleNav}
          to="/connect-wallet"
        >
          Connect Wallet
        </Link>

        {/* <Link
          className={cn("button-stroke button-small header__connect", styles.button)}
          to="/form-api"
        >
          SIGN UP
        </Link>

        <Link
          className={cn("button-stroke button-small header__connect", styles.button)}
          to="/login"
        >
          LOGIN
        </Link> */}
        {/* <User className={styles.user} /> */}
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;

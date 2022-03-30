import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Player.module.sass";
import stylesLink from "./Card.module.sass";
import Icon from "../Icon";

const Player = ({ className, item }) => {
  return (
    <div className="">
      <div className={cn(styles.player, className)}>
        <div className={styles.preview}>
          <img
            srcSet={`${item.image2x} 2x`}
            src={item.image}
            alt="Video preview"
          />
          <div className={styles.control}>
            {/* <button className={cn(styles.button, styles.play)}>
              <Icon name="play" size="24" />
            </button>
            <div className={styles.line}>
              <div className={styles.progress} style={{ width: "20%" }}></div>
            </div>
            <div className={styles.time}>2:20</div>
            <button className={styles.button}>
              <Icon name="volume" size="24" />
            </button>
            <button className={styles.button}>
              <Icon name="full-screen" size="24" />
            </button> */}
            <Link className={stylesLink.link} to={item.url}>
              <div className={stylesLink.body}>
                {/* <div className={stylesLink.line}>
                  <div className={stylesLink.title}>{item.title}</div>
                  <div className={stylesLink.price}>{item.price}</div>
                </div> */}
                <div className={stylesLink.line}>
                  <div className={stylesLink.users}>
                    <div className={stylesLink.avatar}>
                      <img src={item.users[0].avatar} alt="Avatar" />
                    </div>

                    {/* {item.users.map((x, index) => (
                      <div className={stylesLink.avatar} key={index}>
                        <img src={x.avatar} alt="Avatar" />
                      </div>
                    ))} */}
                  </div>
                  <div>
                    <div className={stylesLink.title}>{item.title}</div>
                    <div className={stylesLink.creator}>{item.creator}</div>
                  </div>
                </div>
              </div>
              {/* <div className={stylesLink.foot}>
                <div className={stylesLink.status}>
                  <Icon name="candlesticks-up" size="20" />
                  Highest bid <span>{item.highestBid}</span>
                </div>
                <div
                  className={stylesLink.bid}
                  dangerouslySetInnerHTML={{ __html: item.bid + " 🔥" }}
                />
              </div> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;

import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import Modal from "../Modal";
import Connect from "../ConnectBid";

const Card = ({ className, item, linkColor }) => {
  const cNewName = linkColor ? linkColor : "skyBlue";

  const [visible, setVisible] = useState(false);
  const [visibleModalBid, setVisibleModalBid] = useState(false);

  return (
    <>
      <div className={cn(styles.card, className)}>
        <div className={styles.preview}>
          <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
          <div className={styles.control}>
            <div
              className={cn(
                { "status-green": item.category === "green" },
                styles.category
              )}
            >
              {item.categoryText}
            </div>
            <button
              className={cn(styles.favorite, { [styles.active]: visible })}
              onClick={() => setVisible(!visible)}
            >
              <Icon name="heart" size="20" />
            </button>
            {/* <a href="#test-popup" data-effect="mfp-zoom-in" className={cn("button-small js-popup-open", styles.button)}>
            <span>Place a bid</span>
            <Icon name="scatter-up" size="16" />
          </a> */}
            <button
              className={cn("button btn-square", styles.button)}
              onClick={() => setVisibleModalBid(true)}
            >
              <span>Place a bid</span>
              <Icon name="scatter-up" size="16" />
            </button>
          </div>
        </div>

        <Link
          className={cn(linkColor ? linkColor : "skyBlue", styles.link)}
          //className={styles.link}
          to={item.url}
          //style={{ backgroundColor: { linkColor } }}
        >
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.title}>{item.title}</div>

              {/* <div className={styles.price}>{item.price}</div> */}
            </div>
            <div className={styles.line}>
              <div className={styles.sub}>
                Micha Klein's virtual medicine for a sick society
              </div>

              {/*  <div className={styles.users}>
                {item.users.map((x, index) => (
                  <div className={styles.avatar} key={index}>
                    <img src={x.avatar} alt="Avatar" />
                  </div>
                ))}
              </div>
              <div className={styles.counter}>{item.counter}</div>*/}
            </div>
          </div>
          <div className={styles.foot}>
            <div className={styles.footBtn}> Live </div>
            {/*  <div className={styles.status}>
              <Icon name="candlesticks-up" size="20" />
              Highest bid <span>{item.highestBid}</span>
            </div>
            <div
              className={styles.bid}
              dangerouslySetInnerHTML={{ __html: item.bid }} //fire logo here
            />*/}
          </div>
        </Link>
      </div>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}
      >
        <Connect />
      </Modal>
    </>
  );
};

export default Card;

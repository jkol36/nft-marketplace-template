import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "components/Icon";
import Modal from "components/Modal";
import Connect from "components/ConnectBid";
import LazyImage from "components/LazyImage";

const CardSearch = ({ className, item }) => {
  const [visibleModalBid, setVisibleModalBid] = useState(false);

  return (
    <>
      <div className={cn(styles.card, className)}>
        <div className={styles.preview}>
          <LazyImage src={item.image} alt="Card" />
          <div className={styles.control}>
            {!!item.categoryText && (
              <div
                className={cn(
                  { "status-green": item.category === "green" },
                  styles.category
                )}
              >
                {item.categoryText}
              </div>
            )}
            {/* <a href="#test-popup" data-effect="mfp-zoom-in" className={cn("button-small js-popup-open", styles.button)}>
            <span>Place a bid</span>
            <Icon name="scatter-up" size="16" />
          </a> */}
          </div>
        </div>
        <Link className={styles.link} to={item.url}>
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.title}>{item.title}</div>
              {!!item.price && <div className={styles.price}>{item.price}</div>}
            </div>
            <div className={styles.line}>
              <div className={styles.desc}>{item.description}</div>
            </div>
            <div className={styles.line}>
              {!!item.users && (
                <div className={styles.users}>
                  {item.users.map((x, index) => (
                    <div className={styles.avatar} key={index}>
                      <img src={x.avatar} alt="Avatar" />
                    </div>
                  ))}
                </div>
              )}
              {!!item.counter && (
                <div className={styles.counter}>{item.counter}</div>
              )}
            </div>
          </div>
          <div className={styles.foot}>
            {!!item.highestBid && (
              <div className={styles.status}>
                <Icon name="candlesticks-up" size="20" />
                Highest bid <span>{item.highestBid}</span>
              </div>
            )}
            <div
              className={styles.bid}
              dangerouslySetInnerHTML={{ __html: item.bid }} //fire logo here
            />
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

export default CardSearch;

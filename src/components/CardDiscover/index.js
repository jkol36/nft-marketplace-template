import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./CardDiscover.module.sass";
import LazyImage from "components/LazyImage";

const CardDiscover = ({ className, item }) => {

  return (
    <>
      <Link
        className={cn(styles.card, className)}
        to={{
          pathname: `/marketplace`,
          search: `?index=${item.index}`
        }}>
        <div className={styles.preview}>
          <LazyImage src={item.image} alt="Card" />
          <div className={styles.control}>
            {/* <div
              className={cn(
                { "status-green": item.category === "green" },
                styles.category
              )}
            >
              {item.categoryText}
            </div> */}
            {/* <button
              className={cn(styles.favorite, { [styles.active]: visible })}
              onClick={() => setVisible(!visible)}
            >
              <Icon name="heart" size="20" />
            </button> */}
            {/* <a href="#test-popup" data-effect="mfp-zoom-in" className={cn("button-small js-popup-open", styles.button)}>
            <span>Place a bid</span>
            <Icon name="scatter-up" size="16" />
          </a> */}
            {/* <button
              className={cn("button", styles.button)}
              onClick={() => setVisibleModalBid(true)}
            >
              <span>Place a bid</span>
              <Icon name="scatter-up" size="16" />
            </button> */}
          </div>
        </div>

        <div
          className={cn(item.cName, styles.link)}>
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.title}>{item.title}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardDiscover;

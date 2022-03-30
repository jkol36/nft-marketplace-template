import React, { useEffect, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import cn from "classnames";

import LazyImage from "components/LazyImage";
import styles from "./CardHero.module.sass";

function CardHero({ images, avatars, singleImg, onClick }) {
  let [currentImage, setCurrentImage] = useState(0);

  const switchImage = () => {
    if (currentImage < images.length - 1 && !!images[currentImage + 1]) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    let interval;
    if (images.length > 1) {
      interval = setInterval(switchImage, 5000);
      return () => clearInterval(interval);
    }
  });

  const onClickHandler = () => {
    onClick(currentImage);
  };

  return (
    // <div className="container-fluid">
    <div onClick={onClickHandler} className={styles.root}>
      <div className={styles.card}>
        <div className={styles.card__head}>
          <LazyImage
            src={images[currentImage]}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        {/* <div className="card__frame"> */}
        <div className={styles.card__body}>
          <div className={styles.card__bodyHead}>
            <div className={styles.card__bodyHeadLeft}>
              <img src="bsc.png" alt="" />
              <img src="ethereum.png" alt="" />
              <img src="polygon.png" alt="" />
              {/* <img src="salona.svg" alt="" /> */}
            </div>
            <div className={styles.card__bodyHeadRight}>
              <a
                className={cn(styles.card__link, styles.card__twitter)}
                href="https://twitter.com/closedseanft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
              <a
                className={cn(styles.card__link, styles.card__fb)}
                href="https://closedsea.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookCircleLine />
              </a>

              <a
                className={cn(styles.card__link, styles.card__telegram)}
                href="https://t.me/closedseanft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                className={cn(styles.card__link, styles.card__insta)}
                href="https://www.instagram.com/refinedapesblockparty/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card__footer}>
          <div className={styles.card__footerHead}>
            <div className={styles.card__footerHeadLeft}>
              {avatars && avatars[currentImage] && (
                <LazyImage
                  className={styles.circle}
                  src={avatars[currentImage]}
                  circle
                />
              )}
            </div>
            <div className={styles.card__footerHeadRight}>
              <p>Owners</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default CardHero;

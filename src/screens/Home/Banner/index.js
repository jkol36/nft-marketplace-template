import React from "react";
import styles from "./Banner.module.sass";

function Banner() {

  const onBannerClickHandler = () => {
    window.open('https://rabp.io/', '_black');
  };

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.content__container}>
          <img src="images/content/banner.png" alt="" onClick={onBannerClickHandler} className={styles.imageLink} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

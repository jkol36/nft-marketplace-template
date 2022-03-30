import React from "react";
import styles from "./RabpCard.module.sass";

const RabpCard = ({ img, icon, text, bgColor, url }) => {
  return (
    <div className={styles.card}>
      <div className="card__head">
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className={styles.cartFooter} style={{ backgroundColor: bgColor }}>
        <div className={styles.cardIcon}>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            <img src={icon} alt="" />
          </a>
        </div>
        <h3 className={styles.cardText}>{text}</h3>
      </div>
    </div>
  );
};

export default RabpCard;

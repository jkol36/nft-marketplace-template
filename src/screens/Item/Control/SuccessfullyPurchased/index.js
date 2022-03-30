import React from "react";
import cn from "classnames";
import { useWeb3React } from "@web3-react/core";

import styles from "./SuccessfullyPurchased.module.sass";
import { getEllips } from 'utils/helpers/common';
import { BLOCK_EXPLORER_URLS } from 'utils/helpers/connectors';

// import Icon from "../../../../components/Icon";

// const socials = [
//   {
//     title: "facebook",
//     url: "https://closedsea.com/",
//   },
//   {
//     title: "twitter",
//     url: "https://twitter.com/closedseanft",
//   },
//   {
//     title: "instagram",
//     url: "https://www.instagram.com/closedseanft/",
//   },
//   {
//     title: "pinterest",
//     url: "https://closedsea.com/",
//   },
// ];

const SuccessfullyPurchased = ({ className, buyTxHash }) => {

  const { chainId } = useWeb3React();

  const onViewTransactionHandler = () => {
    window.open(`${BLOCK_EXPLORER_URLS[chainId]}tx/${buyTxHash}`, '_black');
  }
  return (
    <div className={cn(className, styles.wrap)}>
      <div className={cn("h2", styles.title)}>
        Yay!{" "}
        <span role="img" aria-label="firework">
          🎉
        </span>
      </div>
      <div className={styles.info}>
        You successfully purchased ClosedSea Art
      </div>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Transaction ID</div>
          <div className={cn(styles.col, styles.txLink)} onClick={onViewTransactionHandler}>{getEllips(buyTxHash)}</div>
        </div>
      </div>
      {/* <div className={styles.stage}>Time to show-off</div>
      <div className={styles.socials}>
        {socials.map((x, index) => (
          <a
            className={styles.social}
            href={x.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Icon name={x.title} size="24" />
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default SuccessfullyPurchased;

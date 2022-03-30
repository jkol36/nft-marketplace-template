import React from "react";
import styles from "./BackedBy.module.sass";
import cn from "classnames";
//import { ReactComponent as Horowitz } from `${process.env.PUBLIC_URL + '/logo/horowitz.svg'}`

const BackedBy = () => {
  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container-fluid", styles.container)}>
        <div className={styles.wrapper}>
          <a href="https://a16z.com/" target="_blank" rel="noopener noreferrer">
            <img src="logo/horowitz.svg" alt="" />
          </a>
          <a
            href="https://www.coinbase.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="logo/coinbase.svg" alt="" />
          </a>
          <a
            href="https://www.dapperlabs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={{ width: "120px" }} src="logo/dapper.png" alt="" />
          </a>
          <a
            href="https://foundersfund.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="logo/founders-fund.svg" alt="" />
          </a>
          <a
            href="https://blockchain.capital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="logo/blockchain-capital.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackedBy;

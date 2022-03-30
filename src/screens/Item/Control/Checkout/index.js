import React, { useMemo } from "react";
import cn from "classnames";
import Web3 from "web3";

import styles from "./Checkout.module.sass";
import Icon from "../../../../components/Icon";
import CURRENCY_OPTIONS from "utils/constants/currency-options";
import { convertNumber, convertNumberToCurrencyFormat } from "utils/helpers/common";
import useEthPrice from "utils/hooks/use-eth-price";
import useSeaTokenPrice from "utils/hooks/use-sea-token-price";

const Checkout = ({
  className,
  tokenInfo = {},
  listedInfo = {},
  onConfirm,
  onClose
}) => {

  const ethPrice = useEthPrice();
  const seaPrice = useSeaTokenPrice();

  const total = useMemo(() => {
    if (listedInfo.withEther) {
      return Web3.utils.fromWei(listedInfo.price, 'ether');
    } else {
        return parseFloat(Web3.utils.fromWei(listedInfo.price, 'ether'));
    }
  }, [listedInfo]);

  const totalInUSD = useMemo(() => {
    if (listedInfo.withEther) {
        return Web3.utils.fromWei(listedInfo.price, 'ether') * ethPrice;
    } else {
      return Web3.utils.fromWei(listedInfo.price, 'ether') * seaPrice;
    }
  }, [ethPrice, seaPrice, listedInfo]);

  return (
    <div className={cn(className, styles.checkout)}>
      <div className={cn("h4", styles.title)}>Checkout</div>
      <div className={styles.title}>
        You are about to purchase
        <strong> {tokenInfo.name}</strong>
      </div>
      <div className={styles.table}>
        Price
        <div className={styles.row}>
          <div className={styles.col}>{Web3.utils.fromWei(listedInfo.price, 'ether')}</div>
          <div className={styles.col}>
            {listedInfo.withEther ? CURRENCY_OPTIONS[0] : CURRENCY_OPTIONS[1]}            
          </div>
        </div>
        {!listedInfo.withEther && (
          <>
            <div className={styles.row}>
              <div className={cn(styles.col, styles.info)}>
                <span className="gray">Total Amount</span>
              </div>
              <div className={cn(styles.col, styles.info)}>
                {convertNumber(total)} SEA ({convertNumberToCurrencyFormat(totalInUSD)})
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.attention}>
        <div className={styles.preview}>
          <Icon name="check" size="32" />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>Creator has been verified</div>
          {/* <div className={styles.text}>Purchase this item at your own risk</div> */}
        </div>
      </div>
      {/* <div className={cn("h4", styles.title)}>Follow steps</div>
      <div className={styles.line}>
        <div className={styles.icon}>
          <LoaderCircle className={styles.loader} />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>Purchasing</div>
          <div className={styles.text}>
            Sending transaction with your wallet
          </div>
        </div>
      </div> */}
      {/* <div className={styles.attention}>
        <div className={styles.preview}>
          <Icon name="info-circle" size="32" />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>This creator is not verified</div>
          <div className={styles.text}>Purchase this item at your own risk</div>
        </div>
        <div className={styles.avatar}>
          <img src="./images/content/avatar-3.jpg" alt="Avatar" />
        </div>
      </div> */}
      <div className={styles.btns}>
        <button
          onClick={onConfirm}
          className={cn("button btn-square", styles.button)}
        >
          continue
        </button>
        <button className={cn("button-stroke btn-square", styles.button)} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Checkout;

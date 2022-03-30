import React from "react";
import cn from "classnames";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

import Button from 'components/Button';
import styles from "./Accept.module.sass";
import CURRENCY_OPTIONS from "utils/constants/currency-options";
import useGetUser from "utils/hooks/use-get-user";
import { useContracts } from "utils/hooks/use-connectors";

const items = [
  {
    title: "Service fee",
    value: "0 BNB",
  },
  {
    title: "Total bid amount",
    value: "1.46 BNB",
  },
];

const Accept = ({ className, bid, tokenInfo, onConfirm, onClose }) => {
  const { user: bidder } = useGetUser({ account: bid.bidder });
  const [loading, setLoading] = React.useState(false);
  const { contracts } = useContracts();
  const { account } = useWeb3React();

  const onAcceptHandler = async () => {
    if (contracts.nftController && account) {
      setLoading(true);
      try {
        await contracts.nftController.methods.sellTokenTo(tokenInfo.token_address, tokenInfo.token_id, bid.bidder).send({ from: account });
        onConfirm();
      } catch (error) {
        console.log('[onAcceptHandler] error => ', error);
      }
      setLoading(false);
    }
  };

  return (
    <div className={cn(className, styles.accept)}>
      <div className={styles.line}>
        <div className={styles.icon}></div>
        <div className={styles.text}>
          You are about to accept a bid for <strong>{tokenInfo.name}</strong> from <strong>{bidder.userName}</strong>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Bid Amount</div>
          <div className={styles.col}>
            {Web3.utils.fromWei(bid.price, 'ether')} {bid.withEther ? CURRENCY_OPTIONS[0] : CURRENCY_OPTIONS[1]}
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <Button
          className={cn('btn-square', styles.button)}
          loading={loading}
          disabled={loading}
          onClick={onAcceptHandler}>
          Accept bid
        </Button>
        <Button
          variant='stroke'
          className={cn('btn-square', styles.button)}
          disabled={loading}
          onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Accept;

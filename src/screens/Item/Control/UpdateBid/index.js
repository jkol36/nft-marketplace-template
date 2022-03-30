import React, { useMemo, useState } from "react";
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core";
import cn from "classnames";

import styles from "./UpdateBid.module.sass";
import useFeePercent from 'utils/hooks/use-fee-percent';
import { useContracts } from "utils/hooks/use-connectors";
import useEthPrice from "utils/hooks/use-eth-price";
import useSeaTokenPrice from "utils/hooks/use-sea-token-price";
import { convertNumber, convertNumberToCurrencyFormat } from "utils/helpers/common";
import Button from "components/Button";

const UpdateBid = ({ className, tokenInfo, bid, onConfirm, onClose }) => {
  const [inputValue, setInputValue] = useState(Web3.utils.fromWei(bid.price, 'ether'));
  const [loading, setLoading] = useState(false);

  const ethPrice = useEthPrice();
  const seaPrice = useSeaTokenPrice();
  const feePercent = useFeePercent();
  const { contracts } = useContracts();
  const { account } = useWeb3React();

  const onInputChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const handleBid = async () => {
    if (account && contracts.nftController) {
      setLoading(true);
      try {
        let value = 0;
        if (bid.withEther && parseFloat(inputValue) > Web3.utils.fromWei(bid.price)) {
          value = Web3.utils.toWei(((parseFloat(inputValue) - Web3.utils.fromWei(bid.price, 'ether')) + (parseFloat(inputValue) - Web3.utils.fromWei(bid.price, 'ether')) * feePercent / 100).toFixed(5), 'ether');
        }
        await contracts.nftController.methods.updateBidPrice(
          tokenInfo.token_address,
          tokenInfo.token_id,
          Web3.utils.toWei(inputValue, 'ether')
        ).send({ from: account, value: bid.withEther ? value : 0 });
        setLoading(false);
        onConfirm();
      } catch (error) {
        console.log('[handleBid] : ***** error => ', error);
        setLoading(false);
      }
    }
  };

  const priceInUSD = useMemo(() => {
    if (bid.withEther) {
      return Web3.utils.fromWei(bid.price) * ethPrice;
    }
    return Web3.utils.fromWei(bid.price) * seaPrice;
  }, [bid, ethPrice, seaPrice]);

  const total = useMemo(() => {
    if (bid.withEther) {
      if (parseFloat(inputValue) > Web3.utils.fromWei(bid.price)) {
        return (parseFloat(inputValue) - Web3.utils.fromWei(bid.price, 'ether')) + (parseFloat(inputValue) - Web3.utils.fromWei(bid.price, 'ether')) * feePercent / 100;
      }
    } else {
      if (parseFloat(inputValue) > Web3.utils.fromWei(bid.price)) {
        return (parseFloat(inputValue) - Web3.utils.fromWei(bid.price));
      }
    }
    return 0;
  }, [bid, inputValue, feePercent]);

  const totalInUSD = useMemo(() => {
    if (bid.withEther) {
      return total * ethPrice;
    } else {
      return total * seaPrice;
    }
  }, [bid, total, ethPrice, seaPrice]);

  return (
    <div className={cn(className, styles.connect)}>
      <div>
        <h1>Place a bid</h1>
      </div>
      <div className="table-font">
        You are about to purchase Closedsea Art
      </div>
      <div>
        <h3>Your bid</h3>
      </div>
      <div className={styles.line}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={onInputChangeHandler}
        />
        <span className={styles.currency}>{bid.withEther ? 'BNB' : 'SEA'}</span>
      </div>
      <div className={cn(styles.line)} style={{marginTop: '32px'}}>
        <span className="gray">Service Fee</span>
        <span className="table-right">{bid.withEther ? feePercent : 0} %</span>
      </div>
      <div className={cn(styles.line, styles.info)}>
        <span className="gray">Current Bid Price</span>
        <span className="table-right">{convertNumber(Web3.utils.fromWei(bid.price))} {bid.withEther ? 'BNB' : 'SEA'} ({convertNumberToCurrencyFormat(priceInUSD)})</span>
      </div>
      <div className={cn(styles.line, styles.info)}>
        <span className="gray">You will pay in total</span>
        <span className="table-right">{convertNumber(total)} {bid.withEther ? 'BNB' : 'SEA'} ({convertNumberToCurrencyFormat(totalInUSD)})</span>
      </div>
      <div className={styles.btns}>
        <Button
          className={cn('btn-square', styles.button)}
          loading={loading}
          disabled={!inputValue || !parseFloat(inputValue)}
          onClick={handleBid}>
          Update bid
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

export default UpdateBid;

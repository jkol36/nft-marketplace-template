import React, { useMemo, useState } from "react";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import cn from "classnames";

import styles from "./Connect.module.sass";
import useEthBalance from "utils/hooks/use-eth-balance";
import useFeePercent from "utils/hooks/use-fee-percent";
import useSeaBalance from "utils/hooks/use-sea-balance";
import { useContracts } from "utils/hooks/use-connectors";
import Dropdown from "components/Dropdown";
import CURRENCY_OPTIONS from "utils/constants/currency-options";
import useEthPrice from "utils/hooks/use-eth-price";
import useSeaTokenPrice from "utils/hooks/use-sea-token-price";
import useSeaApprove from 'utils/hooks/use-sea-approve';

import {
  convertNumber,
  convertNumberToCurrencyFormat,
} from "utils/helpers/common";
import Button from "components/Button";

const Connect = ({ className, tokenInfo, setVisibleModalBid, onConfirm }) => {
  const [bid, setBid] = useState();
  const [err, setErr] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_OPTIONS[0]);
  const { approved, onApprove } = useSeaApprove();

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const ethBalance = useEthBalance();
  const ethPrice = useEthPrice();
  const seaPrice = useSeaTokenPrice();
  const seaBalance = useSeaBalance();
  const feePercent = useFeePercent();
  const { contracts } = useContracts();
  const { account } = useWeb3React();

  const onInputChangeHandler = (event) => {
    setBid(event.target.value);
  };

  const hasSuffientBalance = useMemo(() => {
    if (selectedCurrency === CURRENCY_OPTIONS[0]) {
      const value = parseFloat(bid) + (parseFloat(bid) * feePercent) / 100;
      return parseFloat(ethBalance) >= value;
    } else {
      return parseFloat(seaBalance) >= parseFloat(bid);
    }
  }, [selectedCurrency, bid, feePercent, ethBalance, seaBalance]);

  const handleBid = async () => {
    if (account && contracts.nftController) {
      setLoading(true);
      try {
        if (selectedCurrency === CURRENCY_OPTIONS[0]) {
          const value = Web3.utils.toWei(
            String(parseFloat(bid) + (parseFloat(bid) * feePercent) / 100),
            "ether"
          );
          await contracts.nftController.methods
            .bidToken(
              tokenInfo.token_address,
              tokenInfo.token_id,
              Web3.utils.toWei(bid, "ether"),
              true
            )
            .send({ from: account, value });
        } else {
          await contracts.nftController.methods
            .bidToken(
              tokenInfo.token_address,
              tokenInfo.token_id,
              Web3.utils.toWei(bid, "ether"),
              false
            )
            .send({ from: account });
        }
        onConfirm();
      } catch (error) {
        console.log('[handleBid] error => ', error);
      }
      setLoading(false);
    }
  };

  const onApproveHandler = async () => {
    setLoading(true);
    await onApprove();
    setLoading(false);
  };

  const total = useMemo(() => {
    if (selectedCurrency === CURRENCY_OPTIONS[0]) {
      if (parseFloat(bid)) {
        return parseFloat(bid) + (parseFloat(bid) * parseInt(feePercent)) / 100;
      }
    } else {
      if (parseFloat(bid)) {
        return parseFloat(bid);
      }
    }
    return 0;
  }, [bid, feePercent, selectedCurrency]);

  const totalInUSD = useMemo(() => {
    if (selectedCurrency === CURRENCY_OPTIONS[0]) {
      if (parseFloat(bid)) {
        return (
          parseFloat(bid) * ethPrice +
          ((parseFloat(bid) * parseInt(feePercent)) / 100) * ethPrice
        );
      }
    } else {
      if (parseFloat(bid)) {
        return parseFloat(bid) * seaPrice;
      }
    }
    return 0;
  }, [bid, ethPrice, feePercent, seaPrice, selectedCurrency]);

  return (
    <div className={cn(className, styles.connect)}>
      <div>
        <h1>Place a bid</h1>
      </div>
      <div className="table-font">
        You are about to purchase Closedsea Art
        {err ? (
          <div>
            <p>
              <strong>please type a Bid first</strong>{" "}
            </p>
          </div>
        ) : (
          <div></div>
        )}
        {success ? (
          <div>
            <p>
              <strong>The Bid is Submited</strong>{" "}
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <h3>Your bid</h3>
      </div>
      <div className={styles.line}>
        <input
          className={styles.input}
          type="text"
          onChange={onInputChangeHandler}
        />
        <Dropdown
          options={CURRENCY_OPTIONS}
          value={selectedCurrency}
          setValue={setSelectedCurrency}
        />
      </div>
      {bid && !hasSuffientBalance && (
        <div className={styles.line}>
          <span className={styles.insuffiientFunds}>You have no insufficient funds.</span>    
        </div>
      )}
      <div className={cn(styles.line)} style={{ marginTop: "32px" }}>
        <span className="gray">Service Fee</span>
        <span className="table-right">
          {selectedCurrency === CURRENCY_OPTIONS[1] ? 0 : feePercent} %
        </span>
      </div>
      <div className={cn(styles.line, styles.info)}>
        <span className="gray">Your Balance</span>
        <span className="table-right">{convertNumber(ethBalance)} BNB</span>
      </div>
      <div className={cn(styles.line, styles.info)}>
        <span className="gray">SEA Token Balance</span>
        <span className="table-right">{convertNumber(seaBalance)} SEA</span>
      </div>
      <div className={cn(styles.line, styles.info)}>
        <span className="gray">Total Amount</span>
        <span className="table-right">
          {convertNumber(total)} {selectedCurrency} (
          {convertNumberToCurrencyFormat(totalInUSD)})
        </span>
      </div>
      <div className={styles.btns}>
        {(selectedCurrency === CURRENCY_OPTIONS[0] || approved) ? (
          <Button
            className={cn('btn-square', styles.button)}
            loading={loading}
            disabled={!bid || !parseFloat(bid) || !hasSuffientBalance}
            onClick={handleBid}>
            Place a bid
          </Button>
        ) : (
          <Button
            className={cn('btn-square', styles.button)}
            loading={loading}
            onClick={onApproveHandler}>
            Approve
          </Button>
        )}
        <Button
          variant="stroke"
          className={cn("btn-square", styles.button)}
          disabled={loading}
          onClick={() => setVisibleModalBid(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Connect;

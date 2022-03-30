import React, { useMemo, useState } from "react";
import cn from "classnames";
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core";

import styles from "./PutSale.module.sass";
import Icon from "components/Icon";
import TextInput from "components/TextInput";
import Loader from 'components/Loader';
import Dropdown from "components/Dropdown";
import useNftApprove from "utils/hooks/use-nft-approve";
import { useContracts } from "utils/hooks/use-connectors";
import useFeePercent from "utils/hooks/use-fee-percent";
import CATEGORY_NAMES from 'utils/constants/category-names';
import CURRENCY_OPTIONS from 'utils/constants/currency-options';
import useEthPrice from "utils/hooks/use-eth-price";
import useSeaTokenPrice from "utils/hooks/use-sea-token-price";
import { convertNumberToCurrencyFormat } from "utils/helpers/common";

const PutSale = ({ className, tokenId, tokenAddress, onConfirm, onClose }) => {
  const [price, setPrice] = useState('');
  const [selectedCat, setSelectedCat] = useState(CATEGORY_NAMES[0]);
  const [loading, setLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_OPTIONS[0]);
  const { web3, contracts } = useContracts();
  const { account } = useWeb3React();
  const feePercent = useFeePercent();
  const ethPrice = useEthPrice();
  const seaPrice = useSeaTokenPrice();

  const onPriceChangeHandler = event => {
    setPrice(event.target.value);
  };

  const usdPrice = useMemo(() => {
    if (selectedCurrency === CURRENCY_OPTIONS[0]) {
      return convertNumberToCurrencyFormat(price * ethPrice);
    } else {
      return convertNumberToCurrencyFormat(price * seaPrice);
    }
  }, [price, selectedCurrency, ethPrice, seaPrice]);

  const { approved, onApprove } = useNftApprove({address: tokenAddress});

  const onListHandler = async () => {
    if (!!account && contracts.nftController) {
      setLoading(true);
      try {
        const { transactionHash } = await contracts.nftController.methods.readyToSellToken(
          tokenAddress,
          tokenId,
          Web3.utils.toWei(price, 'ether'),
          selectedCat,
          selectedCurrency === CURRENCY_OPTIONS[0]
        ).send({ from: account });
        await web3.eth.getTransactionReceipt(transactionHash);
        onConfirm();
      } catch (error) {
        console.log('[onListHandler] error => ', error);
        setLoading(false);
      }
    }
  };

  const onApproveHandler = async () => {
    setLoading(true);
    await onApprove();
    setLoading(false);
  };

  return (
    <div className={cn(className, styles.sale)}>
      <div className={cn("h4", styles.title)}>Put on sale</div>
      <div className={styles.line}>
        <div className={styles.icon}>
          <Icon name="coin" size="24" />
        </div>
        <div className={styles.details}>
          <div className={styles.info}>Instant sale price</div>
          <div className={styles.text}>
            Enter the price for which the item will be instanly sold
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.row}>
          <TextInput className={styles.col} value={price} onChange={onPriceChangeHandler} placeholder='Enter your price' />
          <div className={styles.col}>
            <Dropdown
              options={CURRENCY_OPTIONS}
              value={selectedCurrency}
              setValue={setSelectedCurrency} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>Service Fee</div>
          <div className={styles.col}>{selectedCurrency === CURRENCY_OPTIONS[0] ? feePercent : 0}%</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>Price in USD</div>
          <div className={styles.col}>{usdPrice}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>Category</div>
          <Dropdown
            className={styles.dropdown}
            value={selectedCat}
            setValue={setSelectedCat}
            options={CATEGORY_NAMES}
          />
        </div>
      </div>
      <div className={styles.btns}>
        <button
          className={cn("button", styles.button, {[styles.disabled]: loading || !price})}
          onClick={approved ? onListHandler : onApproveHandler}>
          {loading && (
            <Loader className={styles.loader} />
          )}
          {approved ? loading ? 'Listing...' : 'List' : loading ? 'Approving...' : 'Approve'}
        </button>
        <button className={cn("button-stroke", styles.button, {[styles.disabled]: loading})} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PutSale;

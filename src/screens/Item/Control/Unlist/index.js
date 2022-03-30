import { useState } from 'react';
import cn from 'classnames';
import { useWeb3React } from '@web3-react/core';

import styles from './Unlist.module.sass';
import { useContracts } from 'utils/hooks/use-connectors';
import Loader from 'components/Loader';

const Unlist = ({ className = '', tokenId, tokenAddress, onClose, onConfirm }) => {
  const [loading, setLoading] = useState(false);
  const { web3, contracts } = useContracts();
  const { account } = useWeb3React();

  const onUnlistHandler = async () => {
    if (contracts.nftController) {
      setLoading(true);
      const { transactionHash } = await contracts.nftController.methods.cancelSellToken(tokenAddress, tokenId).send({ from: account });
      await web3.eth.getTransactionReceipt(transactionHash);
      setTimeout(async () => {
        setLoading(false);
        onConfirm();
      }, 3000);
    }
  };

  return (
    <div className={cn(className, styles.root)}>
      <div className={cn("h4", styles.title)}>Cancel Listing</div>
      <div className={styles.line}>
        Are you sure you want to cancel listing your NFT?
      </div>
        <button
          className={cn('button', styles.button, {[styles.disabled]: loading})}
          onClick={onUnlistHandler}>
          {loading && (
            <Loader className={styles.loader} />
          )}
          Confirm
        </button>
        <button className={cn('button button-stroke', styles.button, {[styles.disabled]: loading})} onClick={onClose}>
          Cancel
        </button>
    </div>
  );
};

export default Unlist;

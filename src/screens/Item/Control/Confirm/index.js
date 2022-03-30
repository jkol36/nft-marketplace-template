import React, { useCallback, useState } from "react";
import cn from "classnames";

import styles from "./Confirm.module.sass";
import { useContracts } from "utils/hooks/use-connectors";
import { useWeb3React } from "@web3-react/core";
import useSeaTokenPrice from "utils/hooks/use-sea-token-price";
import useSeaApprove from "utils/hooks/use-sea-approve";
import useEthBalance from "utils/hooks/use-eth-balance";
import useSeaBalance from "utils/hooks/use-sea-balance";
import { useMemo } from "react/cjs/react.development";
import Button from 'components/Button';
import Web3 from "web3";

const Confirm = ({
  className,
  tokenInfo = {},
  listedInfo = {},
  onConfirm,
  onError = () => {},
}) => {
  const { contracts } = useContracts();
  const { account } = useWeb3React();
  const [loading, setLoading] = useState(false);
  const seaTokenPrice = useSeaTokenPrice();
  const { approved, onApprove } = useSeaApprove();
  const ethBalance = useEthBalance();
  const seaBalance = useSeaBalance();

  const hasSuffientBalance = useMemo(() => {
    if (listedInfo.withEther) {
      return parseFloat(ethBalance) >= parseFloat(Web3.utils.fromWei(listedInfo.price, 'ether'));
    } else {
      return parseFloat(seaBalance) >= parseFloat(Web3.utils.fromWei(listedInfo.price, 'ether'));
    }
  }, [ethBalance, listedInfo, seaBalance]);

  const onPurchaseHandler = useCallback(async () => {
    try {
      if (account && contracts.nftController) {
        if (listedInfo.withEther) {
          setLoading(true);
          const { transactionHash } = await contracts.nftController.methods.buyToken(tokenInfo.token_address, tokenInfo.token_id).send({ from: account, value: listedInfo.price });
          onConfirm(transactionHash);
        } else {
          if (seaTokenPrice > 0) {
            setLoading(true);
            const { transactionHash } = await contracts.nftController.methods.buyToken(tokenInfo.token_address, tokenInfo.token_id).send({ from: account });
            onConfirm(transactionHash);
          }
        }
      } else {
        onError();
      }
    } catch (error) {
      console.log('[buyNFT] error => ', error);
      onError(error);
      setLoading(false);
    }
  }, [account, contracts, listedInfo, tokenInfo, seaTokenPrice, onConfirm, onError]);

  const onApproveHandler = async () => {
    setLoading(true);
    await onApprove();
    setLoading(false);
  };

  return (
    <div className={cn(className, styles.checkout)}>
      <div className={cn("h4", styles.title)}>Purchase</div>
      <div className={styles.line}>
        {(!listedInfo.withEther && !approved) ? (
          <button
            onClick={onApproveHandler}
            className={cn("button btn-square", styles.button, {[styles.disabled]: loading})}>
            {loading ? 'Approving...' : 'Approve'}
          </button>
        ) : (
          <div className={styles.purchase}>
            {!hasSuffientBalance && (
              <span>You have insuffient funds to purchase this NFT.</span>
            )}
            <Button
              onClick={onPurchaseHandler}
              disabled={loading || !hasSuffientBalance}
              className={cn("button btn-square", styles.button, {[styles.disabled]: loading})}>
              {loading ? 'Purchasing...' : 'Purchase'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirm;

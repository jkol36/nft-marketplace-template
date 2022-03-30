import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import cn from "classnames";

import styles from "./UpdateBid.module.sass";
import { useContracts } from "utils/hooks/use-connectors";
import Button from "components/Button";

const CancelBid = ({ className, tokenInfo, onConfirm, onClose }) => {
  const [loading, setLoading] = useState(false);

  const { contracts } = useContracts();
  const { account } = useWeb3React();

  const onCancelHandler = async () => {
    if (contracts.nftController && account) {
      setLoading(true);
      try {
        await contracts.nftController.methods.cancelBidToken(tokenInfo.token_address, tokenInfo.token_id).send({ from: account });
        setLoading(false);
        onConfirm();
      } catch (error) {
        console.log('[onCancelHandler] error => ', error);
      }
      setLoading(false);
    }
  };

  return (
    <div className={cn(className, styles.connect)}>
      <div>
        <h1>Cancel your bid</h1>
      </div>
      <div className="table-font">
        Are you sure that you really want to cancel this bid?
      </div>
      <div className={styles.btns}>
        <Button
          className={cn('btn-square', styles.button)}
          loading={loading}
          onClick={onCancelHandler}>
          Yes
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

export default CancelBid;

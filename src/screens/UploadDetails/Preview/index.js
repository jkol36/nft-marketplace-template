import React, { useEffect, useState } from "react";
import cn from "classnames";

import styles from "./Preview.module.sass";
import Icon from "../../../components/Icon";
import FILE_TYPES from "utils/constants/file-types";
import useSeaBalance from "utils/hooks/use-sea-balance";
import { useContracts } from "utils/hooks/use-connectors";
import Web3 from "web3";

const Preview = ({ mediaFile, mediaType, fileType, data, className, onClose, onClear }) => {
  const { contracts } = useContracts();
  const userSeaTokenBalance = useSeaBalance();

  const [mintPrice, setMintPrice] = useState(0);
  const [seaAmountForExemptFee, setSeaAmountForExemptFee] = useState(0);

  const getMintPrice = React.useCallback(async () => {
    if (contracts.closedSeaNft) {
      let mintFee = await contracts.closedSeaNft.methods.mintPriceInETH().call();
      const exemptThreshold = await contracts.closedSeaNft.methods.seaAmountForExemptFee().call();
      setSeaAmountForExemptFee(Web3.utils.fromWei(exemptThreshold, 'ether'));
      setMintPrice(Web3.utils.fromWei(mintFee, 'ether'));
    }
  }, [contracts]);

  useEffect(() => {
    getMintPrice();
  }, [getMintPrice]);

  return (
    <div className={cn(className, styles.wrap)}>
      <div className={styles.inner}>
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size="14" />
        </button>
        <div className={styles.info}>Preview</div>
        <div className={styles.card}>
          <div className={styles.preview}>
            {!!mediaFile ? (
              <>
                {(mediaType === FILE_TYPES.VIDEO || mediaType === FILE_TYPES.AUDIO) && (
                  <video
                    className={styles.video}
                    variant='rounded'
                    controls>
                    <source src={mediaFile} type={fileType} />
                  </video>)}
                {mediaType === FILE_TYPES.IMAGE && (
                  <img src={mediaFile} alt='img' className={styles.video} />
                )}
              </>
            ) : (
              'No File Selected Yet'
            )}
          </div>
          <div className={styles.link}>
            <div className={styles.body}>
              <div className={styles.line}>
                <div className={styles.title}>
                  Name:
                </div>
                <div className={styles.value}>
                  {data.name ? (
                    <b>{data.name}</b>
                  ) : (
                    'No set'
                  )}
                </div>
                {/* <div className={styles.price}>2.45 BNB</div> */}
              </div>
              <div className={styles.line}>
                <div className={styles.title}>
                  Description:
                </div>
                <div className={styles.value}>
                  {data.description || 'No set'}
                </div>
              </div>
              <div className={styles.line}>
                <div className={styles.title}>
                  External Link:
                </div>
                <div className={styles.value}>
                  {data.externalLink || 'No set'}
                </div>
              </div>
            </div>
            <div className={styles.foot}>
              <div className={styles.status}>
                <Icon name="candlesticks-up" size="20" />
                Mint Fee
              </div>
              <div className={styles.bid}>
                {parseFloat(userSeaTokenBalance) >= parseFloat(seaAmountForExemptFee) ? ('0 BNB') : (`${mintPrice} BNB`)}
              </div>
            </div>
          </div>
          <button className={styles.clear} onClick={onClear}>
            <Icon name="circle-close" size="24" />
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;

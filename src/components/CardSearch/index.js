import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core";



import styles from "./Card.module.sass";
import Icon from "../Icon";
import Modal from "../Modal";
import Connect from "../ConnectBid";
import LazyImage from "components/LazyImage";

const CardSearch = ({ className, item, liked, toggleLiked }) => {
  console.log('card search mounting', liked, item)
  const { account } = useWeb3React();
  const [visible, setVisible] = useState(liked);
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  console.log('got account', account)

  return (
    <>
      <div className={cn(styles.card, className)}>
        <div className={styles.preview}>
          <LazyImage src={item._source.imageUrl} alt="Card" />
          <div className={styles.control}>
            {!!item.categoryText && (
              <div
                className={cn("status-green", styles.category)}>
                {item.categoryText}
              </div>
            )}
            <button
              className={cn(styles.favorite, { [styles.active]: visible })}
              onClick={toggleLiked}
            >
              <Icon name="heart" size="20" />
            </button>
            <button
              className={cn("button btn-square", styles.button)}
              onClick={() => setVisibleModalBid(true)}
            >
              <span>Place a bid</span>
              <Icon name="scatter-up" size="16" />
            </button>
          </div>
        </div>
        <Link className={styles.link} to={`asset/${item._source.tokenAddr}/${item._source.tokenId}`}>
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.title}>{item._source.name}</div>
              {!!item._source.price && <div className={styles.price}>{Web3.utils.fromWei(item._source.price, 'ether')} BNB</div>}
            </div>
            <div className={styles.line}>
              <div className={styles.avatar}>
                <LazyImage src={item._source.imageUrl} alt="Avatar" />
              </div>
            </div>
          </div>
          <div className={styles.foot}>
            {!!item.highestBid && (
              <div className={styles.status}>
                <Icon name="candlesticks-up" size="20" />
                Highest bid <span>{Web3.utils.fromWei(item._source.highestBid[1])} {item._source.highestBid[2] ? 'BNB' : 'SEA'}</span>
              </div>
            )}
            <div
              className={styles.bid}
              dangerouslySetInnerHTML={{ __html: item._source.bid }} //fire logo here
            />
          </div>
        </Link>
      </div>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}>
        <Connect />
      </Modal>
    </>
  );
};

export default CardSearch;

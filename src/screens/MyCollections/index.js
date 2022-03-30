import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import OutsideClickHandler from "react-outside-click-handler";
import { useWeb3React } from '@web3-react/core';

import Button from 'components/Button';
import CollectionCard from './CollectionCard';
import styles from './MyCollections.module.sass'
import WalletConnection from 'components/WalletConnection';
import { fetchMyCollectionData } from 'utils/helpers/apis/fetch-collection-data';

const MyCollections = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [myCollections, setMyCollections] = useState([]);

  const { account } = useWeb3React();

  const onCreateCollectionHandler = () => {
    setMoreOpen(true);
  };

  useEffect(() => {
    if (account) {
      fetchMyCollectionData({ address: account }).then(data => {
        console.log('got my collection data', data)
        setMyCollections(data);
      })
    }
  }, [account]);

  const onDeletedCollectionHandler = () => {
    if (account) {
      fetchMyCollectionData({ address: account }).then(data => {
        setMyCollections(data);
      });
    }
  };

  if (!account) {
    return (
      <WalletConnection />
    )
  }

  return (
    <div className={styles.root}>
      <h2 className={cn('h2', styles.bottomMargin)}>My Collections</h2>
      <div className={styles.subtitle}>Create, manage collections of unique NFTs to share and sell.</div>
      <div className={cn(styles.flex, styles.bottomMargin)}>
        <OutsideClickHandler onOutsideClick={() => setMoreOpen(false)}>
          <Button
            className={styles.collectionBtn}
            onClick={onCreateCollectionHandler}>
            Create a Collection
            {moreOpen && (
              <div className={styles.dropdown}>
                <Link to={'/create-collection'} className={styles.menuItem}>Create new collection</Link>
                <Link to={'/import-collection'} className={styles.menuItem}>Import an existing smart contract</Link>
              </div>
            )}
          </Button>
        </OutsideClickHandler>
      </div>
      <div className={styles.collections}>
        {myCollections.map((collection, index) => {
          return (
            <CollectionCard key={`${collection.name}-${index}`} collection={collection} deletedCollection={onDeletedCollectionHandler} />
          )
        })}
      </div>
    </div>
  );
};

export default MyCollections;

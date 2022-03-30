import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { AiOutlineFileImage, AiOutlineMore } from 'react-icons/ai';
import OutsideClickHandler from "react-outside-click-handler";

import Button from 'components/Button';
import LazyImage from 'components/LazyImage';
import styles from './CollectionCard.module.sass'
import useFetchCollectionTokens from 'utils/hooks/use-fetch-collection-tokens';
import deleteCollection from 'utils/helpers/apis/delete-collection';

const CollectionCard = ({ collection, deletedCollection }) => {
  const history = useHistory();
  const { tokens } = useFetchCollectionTokens({ name: collection.name, nftAddress: collection.nftAddress });
  const [moreOpen, setMoreOpen] = useState(false);

  const onDetailHandler = () => {
    history.push({
      pathname: `/collection/${collection.name}/${collection.nftAddress}`
    });
  };

  const onMoreClickHandler = event => {
    event.stopPropagation();
    setMoreOpen(true);
  };

  const onDeleteHandler = () => {
    deleteCollection({ _id: collection._id }).then(re => {
      deletedCollection();
    })
  }

  return (
    <div className={styles.root} onClick={onDetailHandler}>
      <OutsideClickHandler onOutsideClick={() => setMoreOpen(false)}>
        <Button variant='circle-stroke' className={styles.btnMore} onClick={onMoreClickHandler}>
          <AiOutlineMore />
          {moreOpen && (
            <div className={styles.dropdown}>
              <Link to={`/edit-collection/${collection.name}`} className={styles.menuItem}>Edit collection</Link>
              <div className={styles.menuItem} onClick={onDeleteHandler}>Delete collection</div>
            </div>
          )}
        </Button>
      </OutsideClickHandler>
      <div className={styles.preview}>
        {collection.avatar ? <LazyImage src={collection.avatar} /> : <AiOutlineFileImage style={{ width: '64px', height: '64px' }} />}
      </div>
      <div className={styles.footer}>
        <h2>{collection.name}</h2>
        <span className={styles.subtitle}>by <a href='#'>you</a></span>
        <span className={cn('h6', styles.marginX, styles.subtitle)}>Explore {collection.name}</span>
        <span className={cn(styles.marginX, styles.subtitle)}>{tokens.length} items</span>
      </div>
    </div>
  );
};

export default CollectionCard;

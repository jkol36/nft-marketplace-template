import React, { useRef, useMemo, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import cn from "classnames";
import { useWeb3React } from "@web3-react/core";
import { AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';

import styles from "./Collection.module.sass";
import Items from "./Items";
import useGetUser from "utils/hooks/use-get-user";
import useFetchCollectionTokens from "utils/hooks/use-fetch-collection-tokens";
import { fetchCollection } from "utils/helpers/apis/fetch-collection-data";
import Spinner from "components/Spinner/Spinner";
import LazyImage from "components/LazyImage";
import Button from 'components/Button';

const convertTokens = (tokens) => {
  return tokens.map((token) => {

    return {
      title: token.metadata?.name || "",
      image: token.metadata?.imageUrl || "",
      url: `/asset/${token.token_address}/${token.token_id}`,
      description: token.metadata?.description || "",
    };
  });
};

const Collection = () => {
  const [visible, setVisible] = useState(false);
  const [collection, setCollection] = useState();
  const [loading, setLoading] = useState(false);
  const { name, nftAddress } = useParams();
  const { loading: loadingTokens, tokens } = useFetchCollectionTokens({ name, nftAddress });
  const history = useHistory();

  const { account } = useWeb3React();

  const { hasItem, isOwner } = useMemo(() => {
    const hasItem = !!tokens.find(t => t.owner_of?.toLowerCase() === account?.toLowerCase());
    const isOwner = collection?.owner?.toLowerCase() === account?.toLowerCase();
    return { hasItem, isOwner };
  }, [account, collection, tokens]);

  useEffect(() => {
    setLoading(true);
    fetchCollection(name).then(data => {
      setLoading(false);
      setCollection(data);
    })
  }, [name]);

  const collectibles = useMemo(() => {
    return convertTokens(tokens);
  }, [tokens]);

  if (loading) {
    return (
      <Spinner />
    )
  };

  const onEditHandler = () => {
    history.push({
      pathname: `/edit-collection/${name}`
    });
  };

  const onAddItemHandler = () => {
    history.push({
      pathname: '/mint',
      state: { collection: name }
    });
  };

  return (
    <div className={styles.root}>
      <div className={cn(styles.head, { [styles.active]: visible })}>
        {(isOwner) ? (
          <div className={styles.editOptions}>
            <Button className={cn('button', styles.rightMargin, styles.btnOption)} onClick={onEditHandler}>
              <AiOutlineEdit /> Edit
            </Button>
            <Button className={cn('button', styles.rightMargin, styles.btnOption)} onClick={onAddItemHandler}>
              <AiOutlinePlus /> Add Item
            </Button>
          </div>
        ) : hasItem && (
          <div className={styles.editOptions}>
            <Button className={cn('button', styles.rightMargin, styles.btnOption)} onClick={onAddItemHandler}>
              <AiOutlinePlus /> Add Item
            </Button>
          </div>
        )}
        {!!collection?.background && (
          <LazyImage src={collection.background} />
        )}
      </div>
      <div className={styles.avatar}>
        {!!collection?.avatar && (
          <LazyImage src={collection.avatar} />
        )}
      </div>
      <h2 className={cn('h2', styles.topMargin)}>{collection?.name}</h2>
      <span className={styles.topMargin}>{collection?.description}</span>
      <Items class={styles.items} items={collectibles} loading={loadingTokens} />
    </div>
  );
};

export default Collection;

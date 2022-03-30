import { useLocation } from "react-router";
import { useCallback, useEffect } from "react/cjs/react.development";
import React, { useState } from "react";
import cn from "classnames";

import styles from "./Search02.module.sass";
import Image from "../../components/Image";
import Form from "../../components/Form";
import CardSearch from "../../components/CardSearch";
import useFetchNftsByName from "utils/hooks/use-fetch-nfts-by-name";

import Spinner from "components/Spinner/Spinner";

const items = [
  {
    title: "Artwork",
    content: "138 items",
    image: "./images/content/activity-pic-1.jpg",
  },
  {
    title: "Photography",
    content: "138 items",
    image: "./images/content/activity-pic-5.jpg",
  },
  {
    title: "Game",
    content: "138 items",
    image: "./images/content/activity-pic-4.jpg",
  },
  {
    title: "Music",
    content: "138 items",
    image: "./images/content/activity-pic-2.jpg",
  },
];

const Search = () => {
  const { search: param } = useLocation();
  const q = new URLSearchParams(param).get('q');


  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(q);
  const { loading, nfts } = useFetchNftsByName({ name:q });

  
  console.log('search component', loading, nfts)
  console.log(nfts.length > 0)
  console.log(nfts[0])

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className={cn("section", styles.section)}>
      {loading ? (
        <Spinner />
      ) : (
        <div className={cn("container-fluid", styles.container)}>
          {nfts.length > 0 ? (
            nfts.map((nft, index) => (
              <CardSearch key={index} className={styles.card} item={nft} index={`${nft._source.tokenAddr}-${nft._source.tokenId}`} />
            ))
          ) : (
            <div className={styles.wrap}>
              <h2 className={cn("h2", styles.title)}>
                Sorry, we couldn’t find any results for this search.
              </h2>
              <div className={styles.info}>Maybe give one of these a try?</div>
              <Form
                className={styles.form}
                value={search}
                setValue={setSearch}
                onSubmit={() => handleSubmit()}
                placeholder="Enter your search..."
                type="text"
                name="search"
              />
            </div>
          )}
          <div className={styles.subtitle}>Explore more</div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.picture}>
                  <img src={x.image} alt="Category" />
                </div>
                <div className={styles.details}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

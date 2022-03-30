import React, { useMemo } from "react";
import { useHistory } from "react-router";
import cn from "classnames";

import styles from "./Content.module.sass";
import CardHero from "./CardHero/CardHero";
import useListedNFTsByPage from "utils/hooks/use-listed-nfts-by-page";

const Content = () => {
  const history = useHistory();
  const { list } = useListedNFTsByPage({ page: 1, size: 10 });
  const imageList = useMemo(() => {
    const div = parseInt(list.length / 3);
    let result = [];
    let sub1 = { images: [], avatars: [], info: [] };
    let sub2 = { images: [], avatars: [], info: [] };
    let sub3 = { images: [], avatars: [], info: [] };
    for (let i = 0; i < div + 2; i++) {
      const index = i * 3;
      if (list[index]) {
        sub1 = {
          info: [
            ...sub1.info,
            {
              tokenAddr: list[index]?.tokenAddr,
              tokenId: list[index]?.tokenId,
              image: list[index]?.metadata?.imageUrl
            }]
        };
      }
      if (list[index + 1]) {
        sub2 = {
          info: [
            ...sub2.info,
            {
              tokenAddr: list[index + 1]?.tokenAddr,
              tokenId: list[index + 1]?.tokenId,
              image: list[index + 1]?.metadata?.imageUrl
            }
          ]
        };
      }
      if (list[index + 2]) {
        sub3 = {
          info: [
            ...sub3.info,
            {
              tokenAddr: list[index + 2]?.tokenAddr,
              tokenId: list[index + 2]?.tokenId,
              image: list[index + 2]?.metadata?.imageUrl
            }
          ]
        };
      }
    }
    result = [sub1, sub2, sub3];
    return result;
  }, [list]);

  const onItemClickHandler = info => currentIndex => {
    const item = info[currentIndex];
    if (item) {
      history.push(`asset/${item.tokenAddr}/${item.tokenId}`);
    }
  };

  return (
    <div className={styles.section}>
      <div className={cn("container-fluid", styles.container)}>
        <div className={styles.content}>
          {imageList.map((item) => {
            const random = Math.random() * 100000000;

            return (
              <div key={random} className={styles.content__container}>
                <CardHero info={item.info} onClick={onItemClickHandler(item.info)} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;

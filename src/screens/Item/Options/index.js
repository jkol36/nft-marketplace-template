import React from "react";
import cn from "classnames";
import styles from "./Options.module.sass";
import { AiOutlineHeart, AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";

import Button from 'components/Button';
import { updateLikeInfo } from "utils/helpers/apis/view-and-like";

const Options = ({ className, user, viewAndLikeInfo = {}, isOwner, account }) => {
  console.log('options loading', user, viewAndLikeInfo, account)
  const [loadingLike, setLoadingLike] = React.useState(false);
  const isLikedByUser = viewAndLikeInfo?.likedAccounts?.indexOf(account) !== -1 || false

  // const onLikeHandler = () => {
  //   setLoadingLike(true);
  //   if (account) {
  //     if (viewAndLikeInfo?.likedAccounts?.indexOf(account) !== -1 {
  //       const data = {
  //         ...viewAndLikeInfo,
  //         likes: parseInt(viewAndLikeInfo?.likes) || 0 + 1,
  //         address: account
  //       }
  //       updateLikeInfo(data).then(re => {
  //         setLoadingLike(false);
  //       })
  //     }
  //   }
  // }

  return (
    <div className={styles.optionsContainer}>
      <div className={cn(styles.options, className)}>
        <div className={styles.items}>
          <div className={styles.itemImgCantainer}>
            <img src={user.avatar} alt="" />
          </div>
        </div>

        <div className={styles.items}>
          <Button className={cn("button-circle-stroke", styles.button)}>
            <FaShareSquare size={20} />
            {/* <Icon name="share" size="24" /> */}
          </Button>
          <Button
            className={cn(
              "button-circle-stroke",
              styles.button,
              styles.favorite,
              isLikedByUser ? styles.fillPink: null
            )}
            disabled={
              isOwner ||
              loadingLike
            }
            >
            <AiFillHeart size={20} />
          </Button>
        </div>
      </div>

      <div className={styles.itemSocial}>
        <div className={styles.itemSocialLeft}>
          <img src="./bsc.png" alt="" />
          <img src="./ethereum.png" alt="" />
          <img src="./polygon.png" alt="" />
          {/* <img src="./salona.svg" alt="" /> */}
        </div>
        <div className={styles.itemSocialRight}>
          <a
            className={cn("twitterBg", styles.itemSocialrightStyles)}
            href={`https://twitter.com/intent/tweet?text=Check out this Item on ClosedSea&url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter size={16} />
          </a>
          <a
            className={cn("facebookBg", styles.itemSocialrightStyles)}
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookCircleLine size={16} />
          </a>

          {/* <a
            className={cn("telegramBg", styles.itemSocialrightStyles)}
            href="https://t.me/closedseanft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane size={16} />
          </a> */}
          {/* <a
            className={cn("instaBg", styles.itemSocialrightStyles)}
            href="https://closedsea.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={16} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Options;

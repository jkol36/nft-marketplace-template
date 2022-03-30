import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";
import {
  BiHistory,
} from "react-icons/bi";
import {
  MdDescription,
  MdRemoveRedEye,
  MdFlag,
  MdMoreVert,
} from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";
import { CgDetailsMore } from "react-icons/cg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImEmbed } from "react-icons/im";
import { useWeb3React } from "@web3-react/core";

import styles from "./Item.module.sass";
import Users from "./Users";
import Control from "./Control";
import Options from "./Options";
import Toggle from "../../components/Toggle/Toggle";
import useTokenOwner from "utils/hooks/use-token-owner";
import useGetUser from "utils/hooks/use-get-user";
import useIsBannedNFT from 'utils/hooks/use-is-banned-nft';
import { getEllips, getChainNames } from 'utils/helpers/common';
import ReactSkeleton from "components/ReactSkeleton";
import WalletConnectionModal from "components/WalletConnectionModal";
import { useEagerConnect } from "utils/hooks/use-connectors";
import CONNECTOR_NAMES from "utils/constants/connectorNames";
import Spinner from "components/Spinner/Spinner";
import LazyImage from "components/LazyImage";
import { addView, fetchViewAndLike } from "utils/helpers/apis/view-and-like";

const navLinks = ["Info"];

const usersHistory = [
  {
    name: "Julie P. Graves",
    position: "Place a bid: 1.46 BNB",
    avatar: "./images/icons/icon4.png",
    reward: "./images/content/reward-1.svg",
  },
  {
    name: "Lisa E. Lyles",
    position: "Put Closedsea Art on sale",
    avatar: "./images/icons/icon5.png",
    reward: "./images/content/reward-1.svg",
  },
  {
    name: "Donald I. Andrews",
    position: "Accepted Julie P. Graves's bid",
    avatar: "./images/icons/icon6.png",
    reward: "./images/content/reward-1.svg",
  },
];

const usersBids = [
  {
    position: "Highest bid: 1.46 BNB",
    name: "Julie P. Graves",
    avatar: "./images/icons/icon7.png",
    reward: "./images/content/reward-1.svg",
  },
  {
    position: "#2",
    name: "Darek L. Adams",
    avatar: "./images/icons/icon8.png",
    // reward: "./images/content/reward-1.svg",
  },
  {
    position: "#3",
    name: "Wade R. Walker",
    avatar: "./images/icons/icon9.png",
    // reward: "./images/content/reward-1.svg",
  },
];

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownShow, setdropdownShow] = useState(false);
  const [viewAndLikeInfo, setViewAndLikeInfo] = useState();
  const [openWalletConnectionModal, setOpenWalletConnectionModal] = useState(false);
  const [selectedConnectorName, setSelectedConnectorName] = useState(CONNECTOR_NAMES.injected);

  const { address, tokenId } = useParams();
  console.log('item mounting', address, tokenId)
  const { tokenInfo: tInfo, reload } = useTokenOwner({ address, tokenId });
  const isBannedNft = useIsBannedNFT({ tokenAddr: tInfo.token_address, tokenId: tInfo.token_id });

  const metadata = tInfo.metadata ? JSON.parse(tInfo.metadata) : {};
  const { account, chainId } = useWeb3React();

  const { user } = useGetUser({ account: tInfo.owner_of });
  const { login } = useEagerConnect(
    parseInt(localStorage.getItem("chainId")) || parseInt(parseInt(process.env.REACT_APP_DEFAULT_CHAINID)),
    selectedConnectorName
  );

  useEffect(() => {
    if (!chainId) {
      setOpenWalletConnectionModal(true);
    }
  }, [chainId]);

  useEffect(() => {
    if (tInfo?.token_address && account) {
      console.log('running')
      fetchViewAndLike({ tokenAddr: tInfo.token_address, tokenId: tInfo.token_id }).then(data => {
        console.log('view and like data', data)
        setViewAndLikeInfo(data);
        // if (!data.viewedAddresses?.find(v => v === account?.toLowerCase()) || tInfo.owner_of?.toLowerCase() === account.toLowerCase()) {
        //   addView({ tokenAddr: tInfo.token_address, tokenId: tInfo.token_id, address: account, likes: data.likes });
        //   fetchViewAndLike({ tokenAddr: tInfo.token_address, tokenId: tInfo.token_id }).then(d => {
        //     setViewAndLikeInfo(d);
        //   });
        // }
      });
    }
  }, [tInfo, account]);

  const onWalletConnectHandler = connectorName => () => {
    setSelectedConnectorName(connectorName);
    setOpenWalletConnectionModal(false);
    login()
  };

  const onCloseHandler = () => {
    window.location.href = '/';
    setOpenWalletConnectionModal(false);
  };

  if (!chainId) {
    return (
      <div className={cn("section container-1300", styles.section, styles.fill)}>
        <Spinner />
        <WalletConnectionModal
          open={openWalletConnectionModal}
          chainId={localStorage.getItem("chainId") || parseInt(process.env.REACT_APP_DEFAULT_CHAINID)}
          onConfirm={onWalletConnectHandler}
          onClose={onCloseHandler}
          ignoreBodyScroll
        />
      </div>
    );
  }

  if (isBannedNft) {
    return (
      <div className={styles.ban}>
        This NFT has been banned due to the violation of our policy.
      </div>
    )
  }

  return (
    <>
      <div className={cn("section container-1300", styles.section)}>
        <div className={cn(styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <div className={styles.categories}>
              </div>
              {metadata.imageUrl ? (
                <LazyImage
                  src={metadata.imageUrl}
                  alt="Item"
                />
              ) : (
                <ReactSkeleton height='300px' />
              )}
            </div>
            <Options
              className={styles.options}
              user={user}
              viewAndLikeInfo={viewAndLikeInfo}
              isOwner={tInfo?.owner_of?.toLowerCase() === account?.toLowerCase()}
              account={account} />
            <div className="acco">
              <Toggle isOpen={true} question="Description" Icon={MdDescription}>
                {metadata.description ? (
                  <p>
                    {metadata.description}
                  </p>
                ) : (
                  <ReactSkeleton containerClassName={styles.fullWidth} width='100%' height='40px' />
                )}
              </Toggle>
              <Toggle isOpen={true} question="Details" Icon={CgDetailsMore}>
                {tInfo?.token_address ? (
                  <table
                    className="table"
                    style={{ textAlign: "left" }}
                    width="100%">
                    <tbody>
                      <tr>
                        <th>Contract Address</th>
                        <td>{getEllips(tInfo?.token_address || '')}</td>
                      </tr>
                      <tr>
                        <th>Token ID</th>
                        <td>{tInfo.token_id}</td>
                      </tr>
                      <tr>
                        <th>Token Standard</th>
                        <td>{tInfo.contract_type}</td>
                      </tr>
                      <tr>
                        <th>BlockChain</th>
                        <td>{getChainNames(chainId)}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <ReactSkeleton containerClassName={styles.fullWidth} width='100%' height='100px' />
                )}
              </Toggle>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.nameshare}>
              <div className={styles.share}>
                <div>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("facebookColor", styles.shareItem)}
                    style={{ color: "#fff" }}
                  >
                    <FaFacebookF size={20} />
                    {/* <img src={process.env.PUBLIC_URL + "/facebook.png"} alt="" /> */}
                  </a>
                </div>
                <div>
                  <a
                    href={`https://twitter.com/intent/tweet?text=Check out this Item on ClosedSea&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("twitter", styles.shareItem)}
                  >
                    <FaTwitter size={20} />
                    {/* <img src={process.env.PUBLIC_URL + "/twitter.png"} alt="" /> */}
                  </a>
                </div>
                <div>
                  <a href="#" className={styles.shareItem}>
                    <ImEmbed size={22} />
                    {/* <img src={process.env.PUBLIC_URL + "/embed.png"} alt="" /> */}
                  </a>
                </div>
                <div>
                  <a href="#" className={cn("flag", styles.shareItem)}>
                    <MdFlag size={22} />
                    {/* <img src={process.env.PUBLIC_URL + "/flags.png"} alt="" /> */}
                  </a>
                </div>
                <div className={styles.dropdown}>
                  <OutsideClickHandler
                    onOutsideClick={() => setdropdownShow(false)}
                  >
                    <button onClick={() => setdropdownShow(!dropdownShow)}>
                      <MdMoreVert size={24} />
                      {/* <img src={process.env.PUBLIC_URL + "/more.png"} alt="" /> */}
                    </button>

                    {dropdownShow && (
                      <div className={styles.dropdownMenu}>
                        <div className={styles.dropdownItemContainer}>
                          <a className={styles.dropdownItem} href="#">
                            <img
                              src={process.env.PUBLIC_URL + "/flags.png"}
                              alt=""
                            />
                            <p>Report</p>
                          </a>
                        </div>
                      </div>
                    )}
                  </OutsideClickHandler>
                </div>
              </div>
              {tInfo.token_id ? (
                <h4 className={cn("h4 f-30", styles.title)}>#{tInfo.token_id} {metadata?.name}</h4>
              ) : (
                <ReactSkeleton width='250px' containerClassName={cn("h5 f-30", styles.title)} />
              )}
            </div>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(
                    { [styles.active]: index === activeIndex },
                    styles.link
                  )}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
              <div style={{ flexGrow: 1 }} />
              <div className={cn(styles.stats)}>
                <MdRemoveRedEye size={24} style={{ marginRight: "6px" }} />
                <div className={cn(styles.statsLink)} href="/">
                  {viewAndLikeInfo?.data.views || 0} Views
                </div>
              </div>
              <div className={cn(styles.stats)}>
                <AiFillHeart size={24} style={{ marginRight: "6px" }} />
                <div className={cn(styles.statsLink)} href="/">
                  {viewAndLikeInfo?.data.likes || 0} Likes
                </div>
              </div>
            </div>
            <div>
              {activeIndex === 1 && (
                <Users
                  className={cn(styles.users, "mb-5")}
                  items={[user]}
                  isOwner
                />
              )}
              {activeIndex === 2 && (
                <Users
                  className={cn(styles.users, "mb-5")}
                  items={usersHistory}
                />
              )}
              {activeIndex === 3 && (
                <Users className={cn(styles.users, "mb-5")} items={usersBids} />
              )}
              {activeIndex === 0 && (
                <Users
                  className={cn(styles.users, "mb-5")}
                  items={[user]}
                  isOwner
                />
              )}
            </div>
            {/* <Users className={styles.users, "mb-5"} items={users} /> */}
            <Control className={styles.control} tokenInfo={tInfo} reloadTokenInfo={reload} />
          </div>
        </div>

        <div className={cn(styles.containerColumn)}>
          <Toggle isOpen={true} question="Trading History" Icon={BiHistory}>
            {/* <table className={cn(styles.table)} border="1">
              <thead>
                <tr>
                  <td>Price</td>
                  <td>USD Price</td>
                  <td>Expiration</td>
                  <td>@From</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.1 BNB</td>
                  <td>$49.23</td>
                  <td> - </td>
                  <td>Julia P.Grave</td>
                </tr>
              </tbody>
            </table> */}
            No Data
          </Toggle>

          {/* <Toggle
            isOpen={true}
            question="More from this Collection"
            Icon={BiCollection}
          >
            <div className={styles.collection}>
              <div>
                <Link to="/item">
                  <img src={process.env.PUBLIC_URL + "/third/5.jpeg"} alt="" />
                </Link>
              </div>
              <div>
                <Link to="/item">
                  <img src={process.env.PUBLIC_URL + "/third/7.jpeg"} alt="" />
                </Link>
              </div>
              <div>
                <Link to="/item">
                  <img src={process.env.PUBLIC_URL + "/third/8.png"} alt="" />
                </Link>
              </div>
              <div>
                <Link to="/item">
                  <img src={process.env.PUBLIC_URL + "/third/10.jpeg"} alt="" />
                </Link>
              </div>
            </div>
          </Toggle> */}
        </div>
      </div>
    </>
  );
};

export default Item;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./ConnectWallet.module.sass";
import Checkbox from "../../components/Checkbox";
import Icon from "../../components/Icon";
import WalletConnectionModal from "../../components/WalletConnectionModal";
import CHAINS from "../../utils/constants/chains";
import { useEagerConnect } from "../../utils/hooks/use-connectors";
import { useWeb3React } from "@web3-react/core";
import CHAIN from "../../utils/constants/chains";
//import DropdownButton from "../../components/DropdownButton";
import makeBlockie from "ethereum-blockies-base64";
import CONNECTOR_NAMES from "../../utils/constants/connectorNames";
//import { useEagerConnect } from "../../utils/hooks/use-connectors";
//import { FlexContainer } from 'styles/styled-components';
//import useGetMobileView from 'utils/hooks/use-get-mobile-view';

// import styled from 'styled-components';
// import Avatar, { ConfigProvider } from 'react-avatar';

// import styles from './WalletConnectionButton.module.sass';
// import DropdownButton from 'components/DropdownButton';
// import WalletConnectionModal from 'components/WalletConnectionModal';

const menu = [
  {
    title: "Binance",
    color: "#9757D7",
  },
  {
    title: "Polygon",
    color: "#3772FF",
  },
  {
    title: "Ethereum",
    color: "#45B26B",
  },
  // {
  //   title: "Binance Wallet Connect",
  //   color: "#EF466F",
  // },
];

const Connect = () => {
  const [selectedChainId, setSelectedChainId] = useState();
  const [selectedConnectorName, setSelectedConnectorName] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [networkSelected, setNetworkSelected] = useState(false);
  const { chainId } = useWeb3React();
  const { login, logout } = useEagerConnect(
    selectedChainId,
    selectedConnectorName
  );

  useEffect(() => {
    if (networkSelected) {
      login();
      setNetworkSelected(false);
    }
  }, [networkSelected, login]);

  const onChainSelectHandler = (value) => {
    setSelectedChainId(value.chainId);
    setOpenModal(true);
  };

  const onWalletConnectHandler = (connectorName) => () => {
    console.log(connectorName);
    setSelectedConnectorName(connectorName);
    setOpenModal(false);
    setNetworkSelected(true);
  };

  const onCloseHandler = () => {
    setSelectedChainId(null);
  };

  const getChainNameFromChainId = () => {
    return CHAINS.find((chain) => chainId === chain.chainId)?.title;
  };

  const getChainImageFromChainId = () => {
    return CHAINS.find((chain) => chainId === chain.chainId)?.icon;
  };

  return (
    <>
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container center-1200", styles.container)}>
          <div className={styles.head}>
            <Link className={styles.back} to="/">
              <Icon name="arrow-prev" size="24" />
              <div className={cn("font-48", styles.stage)}>
                Connect your wallet
              </div>
            </Link>
          </div>
          <div className={styles.body}>
            <div className={styles.menu}>
              {CHAIN.map((x, index) => (
                <div
                  className={cn({ [styles.active]: index === 0 }, styles.link)}
                  key={index}
                  onClick={() => onChainSelectHandler(x)}
                >
                  <div
                    className={styles.icon}
                    // style={{ backgroundColor: x.color }}
                  >
                    <img src={x.icon} alt="" />
                    {/* <Icon name="wallet" size="24" />
                  <Icon name="check" size="18" fill={x.color} /> */}
                  </div>
                  <span>{x.title}</span>
                  <div className={styles.arrow}>
                    <Icon name="arrow-next" size="14" />
                  </div>
                </div>
              ))}

              {/* {menu.map((x, index) => (
                <div
                  className={cn({ [styles.active]: index === 1 }, styles.link)}
                  key={index}
                >
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: x.color }}
                  >
                    <Icon name="wallet" size="24" />
                    <Icon name="check" size="18" fill={x.color} />
                  </div>
                  <span>{x.title}</span>
                  <div className={styles.arrow}>
                    <Icon name="arrow-next" size="14" />
                  </div>
                </div>
              ))} */}
            </div>
            <div className={styles.wrapper}>
              <div className={styles.bg}>
                <img
                  srcSet="./images/content/connect-bg@2x.jpg 2x"
                  src="./images/content/connect-bg.jpg"
                  alt="Connect wallet"
                />
              </div>
              {/* <div className={styles.item}>
                <div className={cn("h3", styles.title)}>Scan to connect</div>
                <div className={styles.text}>Powered by UI8.Wallet</div>
                <div className={styles.box}>
                  <div className={styles.code}>
                    <img src="./images/content/qr-code.png" alt="Qr-code" />
                  </div>
                </div>
                <button className={cn("button-stroke", styles.button)}>
                  Don’t have a wallet app?
                </button>
              </div>
              <div className={styles.item}>
                <div className={cn("h3", styles.title)}>Terms of service</div>
                <div className={styles.text}>
                  Please take a few minutes to read and understand{" "}
                  <span>Stacks Terms of Service</span>. To continue, you’ll need
                  to accept the terms of services by checking the boxes.
                </div>
                <div className={styles.preview}>
                  <img
                    srcSet="./images/content/connect-pic@2x.jpg 2x"
                    src="./images/content/connect-pic.jpg"
                    alt="Connect wallet"
                  />
                </div>
                <div className={styles.variants}>
                  <Checkbox
                    className={styles.checkbox}
                    value={age}
                    onChange={() => setAge(!age)}
                    content="I am at least 13 year old"
                  />
                  <Checkbox
                    className={styles.checkbox}
                    value={conditions}
                    onChange={() => setConditions(!conditions)}
                    content="I agree Stack terms of service"
                  />
                </div>
                <div className={styles.btns}>
                  <button className={cn("button-stroke", styles.button)}>
                    Cancel
                  </button>
                  <button className={cn("button", styles.button)}>
                    Get started now
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <WalletConnectionModal
          open={!!selectedChainId}
          chainId={selectedChainId}
          onConfirm={onWalletConnectHandler}
          onClose={onCloseHandler}
        />
      )}
    </>
  );
};

export default Connect;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import cn from "classnames";
// import styles from "./ConnectWallet.module.sass";
// import Checkbox from "../../components/Checkbox";
// import Icon from "../../components/Icon";
// import WalletConnectionModal from "../../components/WalletConnectionModal";
// import CHAINS from "../../utils/constants/chains";
// import { useEagerConnect } from "../../utils/hooks/use-connectors";
// import { useWeb3React } from "@web3-react/core";
// import CHAIN from "../../utils/constants/chains";
// //import DropdownButton from "../../components/DropdownButton";
// import makeBlockie from "ethereum-blockies-base64";
// import CONNECTOR_NAMES from "../../utils/constants/connectorNames";
// //import { useEagerConnect } from "../../utils/hooks/use-connectors";
// //import { FlexContainer } from 'styles/styled-components';
// //import useGetMobileView from 'utils/hooks/use-get-mobile-view';

// // import styled from 'styled-components';
// // import Avatar, { ConfigProvider } from 'react-avatar';

// // import styles from './WalletConnectionButton.module.sass';
// // import DropdownButton from 'components/DropdownButton';
// // import WalletConnectionModal from 'components/WalletConnectionModal';

// const menu = [
//   {
//     title: "Binance",
//     color: "#9757D7",
//   },
//   {
//     title: "Polygon",
//     color: "#3772FF",
//   },
//   {
//     title: "Ethereum",
//     color: "#45B26B",
//   },
//   // {
//   //   title: "Binance Wallet Connect",
//   //   color: "#EF466F",
//   // },
// ];

// const Connect = () => {
//   const [age, setAge] = useState(true);
//   const [conditions, setConditions] = useState(false);
//   // const [selectedChainId, setSelectedChainId] = useState();
//   // const [selectedConnectorName, setSelectedConnectorName] = useState();
//   // const [openModal, setOpenModal] = useState(false);
//   // const [networkSelected, setNetworkSelected] = useState(false);
//   // const { account, chainId } = useWeb3React();
//   // const { login, logout } = useEagerConnect(
//   //   selectedChainId,
//   //   selectedConnectorName
//   // );

//   // useEffect(() => {
//   //   if (networkSelected) {
//   //     login();
//   //     setNetworkSelected(false);
//   //   }
//   // }, [networkSelected, login]);

//   // const onChainSelectHandler = (value) => {
//   //   setSelectedChainId(value.chainId);
//   //   setOpenModal(true);
//   // };

//   // const onWalletConnectHandler = (connectorName) => () => {
//   //   setSelectedConnectorName(connectorName);
//   //   setOpenModal(false);
//   //   setNetworkSelected(true);
//   // };

//   // const onCloseHandler = () => {
//   //   setSelectedChainId(null);
//   // };

//   // const getChainNameFromChainId = () => {
//   //   return CHAINS.find((chain) => chainId === chain.chainId)?.title;
//   // };

//   // const getChainImageFromChainId = () => {
//   //   return CHAINS.find((chain) => chainId === chain.chainId)?.icon;
//   // };

//   return (
//     <>
//       <div className={cn("section-pt80", styles.section)}>
//         <div className={cn("container center-1200", styles.container)}>
//           <div className={styles.head}>
//             <Link className={styles.back} to="/">
//               <Icon name="arrow-prev" size="24" />
//               <div className={cn("font-48", styles.stage)}>
//                 Connect your wallet
//               </div>
//             </Link>
//           </div>
//           <div className={styles.body}>
//             <div className={styles.menu}>
//               {CHAIN.map((x, index) => (
//                 <div
//                   className={cn({ [styles.active]: index === 0 }, styles.link)}
//                   key={index}
//                   onClick={() => onChainSelectHandler(x)}
//                 >
//                   <div
//                     className={styles.icon}
//                     // style={{ backgroundColor: x.color }}
//                   >
//                     <img src={x.icon} alt="" />
//                     {/* <Icon name="wallet" size="24" />
//                   <Icon name="check" size="18" fill={x.color} /> */}
//                   </div>
//                   <span>{x.title}</span>
//                   <div className={styles.arrow}>
//                     <Icon name="arrow-next" size="14" />
//                   </div>
//                 </div>
//               ))}

//               {/* {menu.map((x, index) => (
//                 <div
//                   className={cn({ [styles.active]: index === 1 }, styles.link)}
//                   key={index}
//                 >
//                   <div
//                     className={styles.icon}
//                     style={{ backgroundColor: x.color }}
//                   >
//                     <Icon name="wallet" size="24" />
//                     <Icon name="check" size="18" fill={x.color} />
//                   </div>
//                   <span>{x.title}</span>
//                   <div className={styles.arrow}>
//                     <Icon name="arrow-next" size="14" />
//                   </div>
//                 </div>
//               ))} */}
//             </div>
//             <div className={styles.wrapper}>
//               <div className={styles.bg}>
//                 <img
//                   srcSet="./images/content/connect-bg@2x.jpg 2x"
//                   src="./images/content/connect-bg.jpg"
//                   alt="Connect wallet"
//                 />
//               </div>
//               <div className={styles.item}>
//                 <div className={cn("h3", styles.title)}>Scan to connect</div>
//                 <div className={styles.text}>Powered by UI8.Wallet</div>
//                 <div className={styles.box}>
//                   <div className={styles.code}>
//                     <img src="./images/content/qr-code.png" alt="Qr-code" />
//                   </div>
//                 </div>
//                 <button className={cn("button-stroke", styles.button)}>
//                   Don’t have a wallet app?
//                 </button>
//               </div>
//               <div className={styles.item}>
//                 <div className={cn("h3", styles.title)}>Terms of service</div>
//                 <div className={styles.text}>
//                   Please take a few minutes to read and understand{" "}
//                   <span>Stacks Terms of Service</span>. To continue, you’ll need
//                   to accept the terms of services by checking the boxes.
//                 </div>
//                 <div className={styles.preview}>
//                   <img
//                     srcSet="./images/content/connect-pic@2x.jpg 2x"
//                     src="./images/content/connect-pic.jpg"
//                     alt="Connect wallet"
//                   />
//                 </div>
//                 <div className={styles.variants}>
//                   <Checkbox
//                     className={styles.checkbox}
//                     value={age}
//                     onChange={() => setAge(!age)}
//                     content="I am at least 13 year old"
//                   />
//                   <Checkbox
//                     className={styles.checkbox}
//                     value={conditions}
//                     onChange={() => setConditions(!conditions)}
//                     content="I agree Stack terms of service"
//                   />
//                 </div>
//                 <div className={styles.btns}>
//                   <button className={cn("button-stroke", styles.button)}>
//                     Cancel
//                   </button>
//                   <button className={cn("button", styles.button)}>
//                     Get started now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* {openModal && (
//         <WalletConnectionModal
//           open={!!selectedChainId}
//           chainId={selectedChainId}
//           onConfirm={onWalletConnectHandler}
//           onClose={onCloseHandler}
//         />
//       )} */}
//     </>
//   );
// };

// export default Connect;

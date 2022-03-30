import cn from "classnames";

import Modal from "../Modal";
import CONNECTOR_NAMES from "utils/constants/connectorNames";
import styles from "./WalletConnectionModal.module.sass";

const CONNECTOR_ITEMS = [
  {
    index: 1,
    name: "MetaMask",
    title: "MetaMask",
    isFormal: true,
    icon: "/images/icons/metamask.png",
    connector: CONNECTOR_NAMES.injected,
  },
  {
    index: 2,
    name: "TrustWallet",
    title: "Trust Wallet",
    isFormal: true,
    icon: "/images/icons/trust-wallet.png",
    connector: CONNECTOR_NAMES.injected,
  },
  {
    index: 3,
    name: "WalletConnect",
    title: "Wallet Connect",
    isFormal: true,
    icon: "/images/icons/wallet-connection.png",
    connector: CONNECTOR_NAMES.walletConnect,
  },
  {
    index: 4,
    name: "Binance",
    title: "Binance Wallet Connect",
    isFormal: true,
    icon: "/images/icons/bsc.png",
    connector: CONNECTOR_NAMES.injected,
  },
];

const WalletConnectionModal = ({ open, chainId, onConfirm, onClose, ...rest }) => {
  return (
    <Modal title="Wallect Connect" visible={open} onClose={onClose} {...rest}>
      <div className={styles.body}>
        {CONNECTOR_ITEMS.map((item) => (
          <button
            className={cn("button-stroke", styles.walletButton)}
            onClick={onConfirm(item.connector)}
            key={item.name}
          >
            <div key={item.name} className={styles.walletBtnContainer}>
              <img className={styles.img} src={item.icon} alt="asd" />
              <div>{item.title}</div>
            </div>
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default WalletConnectionModal;

import React, { useState } from "react";
import cn from "classnames";

import styles from "./WalletConnection.module.sass";
import Spinner from "components/Spinner/Spinner";
import WalletConnectionModal from "components/WalletConnectionModal";
import CONNECTOR_NAMES from "utils/constants/connectorNames";
import { useEagerConnect } from "utils/hooks/use-connectors";

const WalletConnection = () => {
  const [openWalletConnectionModal, setOpenWalletConnectionModal] = useState(true);
  const [selectedConnectorName, setSelectedConnectorName] = useState(CONNECTOR_NAMES.injected);

  const { login } = useEagerConnect(
    parseInt(localStorage.getItem("chainId")) || parseInt(process.env.REACT_APP_DEFAULT_CHAINID),
    selectedConnectorName
  );

  const onWalletConnectHandler = connectorName => () => {
    setSelectedConnectorName(connectorName);
    setOpenWalletConnectionModal(false);
    login();
  };

  const onCloseHandler = () => {
    setOpenWalletConnectionModal(false);
    window.location.href = '/';
  };

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
};

export default WalletConnection;

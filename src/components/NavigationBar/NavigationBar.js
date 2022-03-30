import React, { useMemo, useEffect, useState, useRef } from "react";
import ReactTooltip from "react-tooltip";
import { useHistory, Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import { BsQuestion } from "react-icons/bs";
import { BiWorld, BiSupport } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineCloudUpload,
  AiOutlineShop,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineInbox
} from "react-icons/ai";
import cn  from 'classnames'
import { useWeb3React } from "@web3-react/core";

import WalletConnectionModal from "../../components/WalletConnectionModal";
import { useEagerConnect } from "../../utils/hooks/use-connectors";
import CHAINS from "../../utils/constants/chains";
import Image from "../Image";
import styles from "./NavigationBar.module.sass";
import useGetUser from "utils/hooks/use-get-user";
import LazyImage from "components/LazyImage";
import { getSuggestedQuery } from "@testing-library/dom";

function Navbar(props) {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    console.log('submitting', query)
    e.preventDefault();
    if (query) {
      history.push({
        pathname: `/search`,
        search: `?q=${query}`
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link className={styles.logo} to="/">
          <Image
            className={styles.navbarImg}
            src="closedsea-logo123.svg"
            srcDark="closed-white.png"
            alt="Closed Sea Logo"
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              className={styles.navInput}
              type="text"
              placeholder="Search ClosedSea NFTs & NFT Games Multi-Chain Marketplace"
              onChange={(e) => setQuery(e.target.value)}
            />
            <AiOutlineSearch size={24} />
          </div>
        </form>
      </div>
      <ul className={styles.navbarNav}>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={cn(styles.navItem, styles[props.addCls])}>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <Link
          to={props.link}
          className={cn(styles.iconButton)}
          onClick={() => setOpen(!open)}
          data-tip={props.dataTip}
          data-for={props.dataFor}
        >
          {props.icon}
        </Link>
        {open && props.children}
      </OutsideClickHandler>
    </li>
  );
}

const DropdownItem = (props) => {
  const {clsName} = props
  return props.input ? (
    <form onSubmit={props.handleSubmit}>{props.children}</form>
  ) : props.link ? (
    <Link to={props.link} href="#" className={cn(styles.menuItem, styles[clsName])}>
      <span className={styles.iconButton}>{props.leftIcon}</span>
      {props.children}
      <span className={styles.iconRight}>{props.rightIcon}</span>
    </Link>
  ) : (
    <div className={ cn(styles.menuItem)} onClick={props.onClick}>
      <span className={styles.iconButton}>{props.leftIcon}</span>
      {props.children}
      <span className={styles.iconRight}>{props.rightIcon}</span>
    </div>
  );
};

const UserProfileDropDown = ({ logout }) => {
  
  return (
    <div className={styles.dropdown}>
      <DropdownItem link="/profile" leftIcon={<AiOutlineUser />}>
        Profile
      </DropdownItem>
      <DropdownItem link="/my-collections" leftIcon={<AiOutlineInbox />}>
        My Collections
      </DropdownItem>
      <DropdownItem onClick={logout} leftIcon={<AiOutlineLogout />}>
        Logout
      </DropdownItem>
    </div>
  );
};

const WalletConectionDropdownMenu = ({ onChainSelected, logout }) => {
  const { account } = useWeb3React();

  return (
    <div className={styles.dropdown}>
      {account ? (
        <div className={styles.connectedPopup}>
          <div className={styles.connectedAddress}>
            {account?.slice(0, 4) +
              "..." +
              account?.slice(account?.length - 4, account?.length)}
            <button className={`button-stroke button-small`} onClick={logout}>
              Disconnect
            </button>
          </div>
        </div>
      ) : (
        CHAINS.map((x) => (
          <DropdownItem
            key={x.name}
            leftIcon={<img src={x.icon} alt="" />}
            onClick={onChainSelected(x)}
          >
            {x.title}
          </DropdownItem>
        ))
      )}
    </div>
  );
};

function DropdownMenu({clsName}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.dropdown}>
      <DropdownItem clsName='navHide' link="/" leftIcon={<AiOutlineHome />}>
        Home
      </DropdownItem>
      <DropdownItem clsName='navHide' link="/marketplace" leftIcon={<AiOutlineShop />}>
        Marketplace
      </DropdownItem>
      <DropdownItem clsName='navHide' link="/mint" leftIcon={<AiOutlineCloudUpload />}>
        Mint
      </DropdownItem>
      <DropdownItem link="/faq" leftIcon={<BsQuestion />}>
        How It Works
      </DropdownItem>
      <DropdownItem link="/marketplace" leftIcon={<BiWorld />}>
        Discover
      </DropdownItem>
      <DropdownItem link="/support" leftIcon={<BiSupport />}>
        Help and Support
      </DropdownItem>
      {/* <DropdownItem link="#" leftIcon={<RiFeedbackLine />}>
        Feedback
      </DropdownItem> */}

      <DropdownItem input={true} handleSubmit={handleSubmit}>
        <input
          className={styles.navInput2}
          type="text"
          placeholder="Search ClosedSea NFTs & NFT Games Multi-Chain Marketplace"
        />
      </DropdownItem>
    </div>
  );
}

const ConnectedChainName = ({ title, icon }) => {
  return (
    <li className={styles.connectedChainNav}>
      <div className={styles.connectedChain}>
        <img src={icon} alt="chain icon" className={styles.connectedImage} />
        <span className={styles.connectedTitle}>{title}</span>
      </div>
    </li>
  );
};

const NavigationBar = () => {
  const [selectedChainId, setSelectedChainId] = useState();
  const [selectedConnectorName, setSelectedConnectorName] = useState();
  const [networkSelected, setNetworkSelected] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { account, chainId, active } = useWeb3React();
  const { user } = useGetUser({ account });

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

  const onChainSelectHandler = (value) => () => {
    setSelectedChainId(value.chainId);
    setOpenModal(true);
  };

  const onWalletConnectHandler = (connectorName) => () => {
    setSelectedConnectorName(connectorName);
    setOpenModal(false);
    setNetworkSelected(true);
  };

  const onCloseHandler = () => {
    setSelectedChainId(null);
    setOpenModal(false);
  };

  const chain = useMemo(() => {
    if (chainId) {
      return CHAINS.find((c) => c.chainId === chainId);
    }
    return null;
  }, [chainId]);

  return (
    <>
      <Navbar>
        {!!chain && (
          <ConnectedChainName title={chain.title} icon={chain.icon} />
        )}
        <NavItem
          dataTip="Home"
          dataFor="home"
          link="/"
          addCls="addCls"
          icon={<AiOutlineHome />}
        />
        <NavItem
          dataTip="Marketplace"
          dataFor="marketplace"
          link="/marketplace"
          addCls="addCls"
          icon={<AiOutlineShop />}
        />
        <NavItem
          dataTip="Notifications"
          dataFor="notifications"
          link="#"
          addCls="addCls"
          icon={<AiOutlineBell />}
        />
        <NavItem
          dataTip="Mint"
          dataFor="mint"
          link="/mint"
          addCls="addCls"
          icon={<AiOutlineCloudUpload />}
        />
        <NavItem
          dataTip={active ? "User Profile" : "Connect Wallet"}
          dataFor={active ? "userInfo" : "connectWallet"}
          link="#"
          icon={
            active ? (
              user.avatar ? (
                <LazyImage src={user.avatar} alt="avatar" />
              ) : (
                <AiOutlineUser />
              )
            ) : (
              <AiOutlinePlus />
            )
          }
        >
          {active ? (
            <UserProfileDropDown logout={logout} />
          ) : (
            <WalletConectionDropdownMenu
              onChainSelected={onChainSelectHandler}
              logout={logout}
            />
          )}
        </NavItem>
        <NavItem icon={<MdExpandMore />} link="#">
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <WalletConnectionModal
        open={openModal}
        chainId={selectedChainId}
        onConfirm={onWalletConnectHandler}
        onClose={onCloseHandler}
      />
      <ReactTooltip id="home" place="top" type="dark" effect="solid" />
      <ReactTooltip id="marketplace" place="top" type="dark" effect="solid" />
      <ReactTooltip id="notifications" place="top" type="dark" effect="solid" />
      <ReactTooltip id="mint" place="top" type="dark" effect="solid" />
      <ReactTooltip id="connectWallet" place="top" type="dark" effect="solid" />
      <ReactTooltip id="userInfo" place="top" type="dark" effect="solid" />
      <ReactTooltip id="more" place="top" type="dark" effect="solid" />
    </>
  );
};

export default NavigationBar;

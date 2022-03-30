import { UnsupportedChainIdError } from "@web3-react/core";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
  InjectedConnector,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
import { NoBscProviderError } from "@binance-chain/bsc-connector";
import Web3 from "web3";

import erc20Abi from "../abis/erc20";
import erc721Abi from 'utils/abis/erc721';
import setupNetwork from "../helpers/setupNetwork";

const rpcConfig = {
  RPC_URL_ETHEREUM: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  RPC_URL_BSC: "https://bsc-dataseed.binance.org/",
  RPC_URL_BSC_TEST: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  RPC_URL_POLYGON: "https://polygon-mainnet.g.alchemy.com/v2/G3XVI5M1t1HEnOwV42Oz7Kg8TujdWFHJ",
};

export const RPC_URLS = {
  1: rpcConfig.RPC_URL_ETHEREUM,
  56: rpcConfig.RPC_URL_BSC,
  97: rpcConfig.RPC_URL_BSC_TEST,
  137: rpcConfig.RPC_URL_POLYGON,
};

export const BLOCK_EXPLORER_URLS = {
  1: "https://etherscan.io/",
  56: "https://bscscan.com/",
  97: "https://testnet.bscscan.com/",
  137: "https://polygonscan.com/",
};

const chainId = Number(localStorage.getItem("chainid")) || 1;

export const injected = new InjectedConnector({ supportedChainIds: [chainId] });

//Test Rinkeby, Kovan, Ropsten : pk_test_D58C7F46E173BEDB
//Production localhost : pk_live_724ABCF7B9489C5C

export const getErrorMessage = (error) => {
  if (error instanceof NoEthereumProviderError) {
    return `No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.`;
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect ||
    error instanceof UserRejectedRequestErrorFrame
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    console.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }
};

export const connectionErrorHandler = async (
  error,
  activate,
  connector,
  chainId
) => {
  
  if (error instanceof UnsupportedChainIdError) {
    const hasSetup = await setupNetwork(chainId);
    if (connector instanceof WalletConnectConnector === false) {
      if (hasSetup) {
        activate(connector);
      } else {
        window.localStorage.removeItem("chainId");
      }
    }
  } else {
    window.localStorage.removeItem("chainId");
    if (
      error instanceof NoEthereumProviderError ||
      error instanceof NoBscProviderError
    ) {
      // toastError(t('Provider Error'), t('No provider was found'))
      console.log("aj : **** Provider Error => ", "No provider was found");
    } else if (
      error instanceof UserRejectedRequestErrorInjected ||
      error instanceof UserRejectedRequestErrorWalletConnect
    ) {
      if (connector instanceof WalletConnectConnector) {
        const walletConnector = connector;
        walletConnector.walletConnectProvider = null;
      }
      // toastError(t('Authorization Error'), t('Please authorize to access your account'))
      console.log(
        "aj : **** Authorization Error => ",
        "Please authorize to access your account"
      );
    } else {
      // toastError(error.name, error.message)
      console.log("aj : **** error => ", error);
    }
  }
};

export const connectContract = async (address, abi) => {
  const { ethereum } = window;
  await ethereum?.enable();

  const web3Provider = new Web3(ethereum);
  const tokenContract = new web3Provider.eth.Contract(abi, address);
  return tokenContract;
};

export const connectErc20Token = async (address) => {
  return connectContract(address, erc20Abi);
};

export const connectErc721Token = async (address) => {
  return connectContract(address, erc721Abi);
}

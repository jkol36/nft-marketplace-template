import CHAINS, { SUPPORTED_CHAIN_IDS } from "utils/constants/chains";
import { RPC_URLS, BLOCK_EXPLORER_URLS } from "utils/helpers/connectors";

/**
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
const setupNetwork = async (chainId) => {
  const provider = window.ethereum;
  const rpcUrl = RPC_URLS[chainId];

  const nativeCurrency = CHAINS.find(
    (chain) => chain.chainId === chainId
  )?.nativeCurrency;
  const chainName = CHAINS.find(
    (chain) => chain.chainId === chainId
  )?.setupName;

  if (provider) {
    try {
      const config = chainId === SUPPORTED_CHAIN_IDS.ETHEREUM || chainId === SUPPORTED_CHAIN_IDS.RINKEBY ? (
        {
          "id": 1,
          "jsonrpc": "2.0",
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
            }
          ]
        }
      ) : (
        {
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName,
              nativeCurrency,
              rpcUrls: [rpcUrl, rpcUrl, rpcUrl],
              blockExplorerUrls: [`${BLOCK_EXPLORER_URLS[chainId]}`],
            },
          ],
        }
      )
      await provider.request(config);
      return true;
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error);
      return false;
    }
  } else {
    console.error(
      "Can't setup the network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};

export default setupNetwork;

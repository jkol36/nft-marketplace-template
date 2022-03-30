const CHAINS = [
  {
    name: 'bsc',
    title: 'BINANCE SMART CHAIN',
    setupName: 'Binance Mainnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    icon: '/images/icons/bsc.png',
    chainId: parseInt(parseInt(process.env.REACT_APP_DEFAULT_CHAINID))
  },
  {
    name: 'polygon',
    title: 'POLYGON',
    setupName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    icon: '/images/icons/polygon.png',
    chainId: 137
  },
  {
    name: 'ethereum',
    title: 'ETHEREUM',
    setupName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    icon: '/images/icons/ethereum.png',
    chainId: 1
  }
];

export const SUPPORTED_CHAIN_IDS = {
  ETHEREUM: 1,
  RINKEBY: 4,
  BSC_TEST: 97,
  BSC_MAIN: 56,
  POLYGON: 137
}

export default CHAINS;

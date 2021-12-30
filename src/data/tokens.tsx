export type Token = {
    image: any;
    price: number;
    symbol: string;
    tokenName: string;
    totalSupply: number;
    circulatingSupply: number;
};

export const defaultToken: Token = {
    image: "C:/Users/ryanc/OneDrive/Desktop/dex-swap/src/assets/eth-diamond-purple.png",
    price: 100,
    symbol: 'ETH',
    tokenName: 'Ethereum',
    totalSupply: 1000000,
    circulatingSupply: 500000
};

export const mockTokens: Token[] = [
  {
    image: "C:/Users/ryanc/OneDrive/Desktop/dex-swap/src/assets/Avalanche_AVAX_RedWhite.svg",
    price: 50,
    symbol: 'AVAX',
    tokenName: 'Avalanche',
    totalSupply: 1000000,
    circulatingSupply: 500000
  },
  {
    image: "C:/Users/ryanc/OneDrive/Desktop/dex-swap/src/assets/Monaco_Logo_-_New-1511762469.png",
    price: 75,
    symbol: 'CRO',
    tokenName: 'Crypto.com Coin',
    totalSupply: 1000000,
    circulatingSupply: 500000
  },
  {
    image: "C:/Users/ryanc/OneDrive/Desktop/dex-swap/src/assets/BNB.png",
    price: 25,
    symbol: 'BNB',
    tokenName: 'Binance Coin',
    totalSupply: 1000000,
    circulatingSupply: 500000
  }
];

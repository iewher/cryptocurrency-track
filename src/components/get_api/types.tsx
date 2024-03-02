export interface Coin {
  CoinInfo: {
    Id: string;
    FullName: string;
    ImageUrl: string;
    Name: string;
  };
  DISPLAY: {
    USD: {
      PRICE: string;
      CHANGEPCTHOUR: string;
      CHANGEPCT24HOUR: string;
      MKTCAP: string;
    };
  };
  checked: boolean;
}

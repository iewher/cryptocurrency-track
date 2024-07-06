export interface DataProps {
  CoinInfo: {
    Algorithm: string;
    FullName: string;
    Internal: string;
    AssetLaunchDate: string;
    ImageUrl: string;
    Url: string;
  };
  RAW: {
    USD: {
      PRICE: string;
      CHANGEPCTHOUR: number;
      CHANGEPCTDAY: number;
    };
  };
  DISPLAY: {
    USD: {
      PRICE: string;
      IMAGEURL: string;
    };
  };
}

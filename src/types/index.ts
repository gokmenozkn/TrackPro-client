export interface IImage {
  thumb: string;
  small: string;
  large: string;
}

export interface IMarketData {
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  current_price: ICurrentPrice;
  sparkline_7d: ISparkline;
}

export interface ISparkline {
  price: number[];
}

export interface ICurrentPrice {
  usd: number
}

// DATA INTERFACE
export interface IData {
  id: string;
  name: string;
  symbol: string;
  image: IImage;
  market_data: IMarketData;
}
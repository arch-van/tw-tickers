export interface CompanyOverview {
  Symbol?: string;
  AssetType?: string;
  Name?: string;
  Description?: string;
  Exchange?: string;
  Sector?: string;
  Industry?: string;
  MarketCapitalization?: string;
  Information?: string;
}

export interface TimeSeriesDaily {
  "Time Series (Daily)": {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string; 
      "4. close": string;
      "5. volume": string;
    }
  }
}

export interface PriceItem {
  date: string;
  close: number;
  volume: number;
  percentChange: string;
}

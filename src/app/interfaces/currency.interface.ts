export interface ICurrency {
  currency: string;
  // This will be used to represent exchange rate from DA currency to base currency
  exchangeRate?: number;
}

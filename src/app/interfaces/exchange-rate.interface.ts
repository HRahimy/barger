export interface IExchangeRate {
  sourceCurrency: string;
  paymentCurrencies: IExchangeRatePaymentCurrency[];
}

export interface IExchangeRatePaymentCurrency {
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
}

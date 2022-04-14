import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICostsResponse} from '../../interfaces/costs-response.interface';
import {IExchangeRate, IExchangeRatePaymentCurrency} from '../../interfaces/exchange-rate.interface';
import {ICurrency} from '../../interfaces/currency.interface';
import {ICost} from '../../interfaces/cost.interface';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  daCurrency: ICurrency;
  baseCurrency: ICurrency;
  currencyOptions: ICurrency[];
  costs: ICost[];
  exchangeRates: IExchangeRate[];

  constructor(private route: ActivatedRoute) {
    const costsResponse: ICostsResponse = route.snapshot.data['costs'];
    this.daCurrency = costsResponse.daCurrency;
    this.baseCurrency = costsResponse.baseCurrency;
    this.costs = costsResponse.costs;
    const initialExchangeRate: IExchangeRate = route.snapshot.data['exchangeRates'];
    this.exchangeRates = [initialExchangeRate];

    // Initialize currency options
    const paymentCurrencies = initialExchangeRate.paymentCurrencies;
    let tempOptions: ICurrency[] = [];
    for (let i = 0; i < paymentCurrencies.length; i++) {
      const newCurrency = <ICurrency>{
        currency: paymentCurrencies[i].toCurrency,
        exchangeRate: paymentCurrencies[i].exchangeRate
      };
      tempOptions = [...tempOptions, newCurrency];
    }
    this.currencyOptions = [...tempOptions];

    const convertedExchangeRateCollection = this.currencyOptions.map(targetCurrency => {
      return <IExchangeRate>{
        sourceCurrency: targetCurrency.currency,
        paymentCurrencies: this.generateConvertedCurrencyPaymentRates(targetCurrency, initialExchangeRate)
      };
    });
    this.exchangeRates = [
      ...this.exchangeRates,
      ...convertedExchangeRateCollection.filter(e => e.sourceCurrency !== initialExchangeRate.sourceCurrency)
    ];

    console.log(JSON.stringify(this.exchangeRates));
  }

  ngOnInit(): void {
  }

  generateConvertedCurrencyPaymentRates(targetCurrency: ICurrency, baselineExchangeRate: IExchangeRate): IExchangeRatePaymentCurrency[] {
    console.log(`triggering update currency handler with currency: ${targetCurrency.currency}...`);
    const baselinePaymentRates = baselineExchangeRate.paymentCurrencies;
    let resultPaymentCurrencyRates: IExchangeRatePaymentCurrency[] = [];
    let newCurrencyOptions: ICurrency[] = [];

    const rateFromPrevToSelected = 1 / targetCurrency.exchangeRate!;
    console.log(`rate from previous to selected: ${rateFromPrevToSelected}`)

    for (let i = 0; i < baselinePaymentRates.length; i++) {
      let newCurrencyRate: IExchangeRatePaymentCurrency;
      let newCurrencyOption: ICurrency;
      if (baselinePaymentRates[i].toCurrency === baselineExchangeRate.sourceCurrency) {
        newCurrencyRate = {
          fromCurrency: targetCurrency.currency,
          toCurrency: baselinePaymentRates[i].toCurrency,
          exchangeRate: rateFromPrevToSelected
        }
        newCurrencyOption = {
          currency: baselinePaymentRates[i].toCurrency,
          exchangeRate: rateFromPrevToSelected
        }
      } else {
        newCurrencyRate = {
          fromCurrency: targetCurrency.currency,
          toCurrency: baselinePaymentRates[i].toCurrency,
          exchangeRate: targetCurrency.currency === baselinePaymentRates[i].toCurrency
            ? 1
            : baselinePaymentRates[i].exchangeRate / rateFromPrevToSelected
        };
        newCurrencyOption = {
          currency: baselinePaymentRates[i].toCurrency,
          exchangeRate: newCurrencyRate.exchangeRate
        };
      }
      resultPaymentCurrencyRates = [...resultPaymentCurrencyRates, newCurrencyRate];
      newCurrencyOptions = [...newCurrencyOptions, newCurrencyOption];
    }

    return resultPaymentCurrencyRates;

    // this.exchangeRate = <IExchangeRate>{
    //   sourceCurrency: selectedCurrency.currency,
    //   paymentCurrencies: [...newPaymentCurrencyRates]
    // };
    // this.currencyOptions = [...newCurrencyOptions];
    // this.baseCurrency = {
    //   ...this.baseCurrency,
    //   exchangeRate: this.exchangeRate.paymentCurrencies.find(e => e.toCurrency === this.baseCurrency.currency)!.exchangeRate
    // };
    //
    // console.log(this.exchangeRate.paymentCurrencies);
  }

}

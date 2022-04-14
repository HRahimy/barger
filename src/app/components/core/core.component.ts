import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICostsResponse} from '../../interfaces/costs-response.interface';
import {IExchangeRate} from '../../interfaces/exchange-rate.interface';
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
  exchangeRate: IExchangeRate;

  constructor(private route: ActivatedRoute) {
    const costsResponse: ICostsResponse = route.snapshot.data['costs'];
    this.daCurrency = costsResponse.daCurrency;
    this.baseCurrency = costsResponse.baseCurrency;
    this.costs = costsResponse.costs;
    this.exchangeRate = route.snapshot.data['exchangeRates'];

    // Initialize currency options
    const paymentCurrencies = this.exchangeRate.paymentCurrencies;
    let tempOptions: ICurrency[] = [];
    for (let i = 0; i < paymentCurrencies.length; i++) {
      const newCurrency = <ICurrency>{
        currency: paymentCurrencies[i].toCurrency,
        exchangeRate: paymentCurrencies[i].exchangeRate
      };
      tempOptions = [...tempOptions, newCurrency];
    }
    this.currencyOptions = [...tempOptions];
  }

  ngOnInit(): void {
  }

  updateDaCurrency(currency: ICurrency): void {
    console.log(`triggering update currency handler with currency: ${currency.currency}...`);
    // Using `for` loop instead of `this.exchangeRate.paymentCurrencies.forEach()`
    // for better performance.
    // const paymentCurrencies = this.exchangeRate.paymentCurrencies;
    // let tempNewOptions: ICurrency[] = [];
    // for (let i = 0; i < paymentCurrencies.length; i++) {
    //   if (!tempNewOptions.find(e => e.currency === paymentCurrencies[i].toCurrency)) {
    //     const newCurrency = <ICurrency>{
    //       currency: paymentCurrencies[i].toCurrency,
    //       exchangeRate: 1 / paymentCurrencies[i].exchangeRate
    //     };
    //     tempNewOptions = [...tempNewOptions, newCurrency];
    //   }
    // }
    // this.currencyOptions = [...tempNewOptions];
  }

}

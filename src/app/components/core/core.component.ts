import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICostsResponse} from "../../interfaces/costs-response.interface";
import {IExchangeRate} from "../../interfaces/exchange-rate.interface";
import {ICurrency} from "../../interfaces/currency.interface";
import {ICost} from "../../interfaces/cost.interface";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  daCurrency: ICurrency;
  baseCurrency: ICurrency;
  costs: ICost[];
  exchangeRate: IExchangeRate;

  constructor(private route: ActivatedRoute) {
    const costsResponse: ICostsResponse = route.snapshot.data['costs'];
    this.daCurrency = costsResponse.daCurrency;
    this.baseCurrency = costsResponse.baseCurrency;
    this.costs = costsResponse.costs;
    this.exchangeRate = route.snapshot.data['exchangeRates'];
  }

  ngOnInit(): void {
  }

}

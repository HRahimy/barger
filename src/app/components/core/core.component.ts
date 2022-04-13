import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICostsResponse} from "../../interfaces/costs-response.interface";
import {IExchangeRate} from "../../interfaces/exchange-rate.interface";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  costsResponse: ICostsResponse;
  exchangeRate: IExchangeRate;

  constructor(private route: ActivatedRoute) {
    this.costsResponse = route.snapshot.data['costs'];
    this.exchangeRate = route.snapshot.data['exchangeRates'];
  }

  ngOnInit(): void {
  }

}

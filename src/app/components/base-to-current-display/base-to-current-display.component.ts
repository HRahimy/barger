import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from '../../interfaces/currency.interface';

@Component({
  selector: 'app-base-to-current-display',
  templateUrl: './base-to-current-display.component.html',
  styleUrls: ['./base-to-current-display.component.css']
})
export class BaseToCurrentDisplayComponent implements OnInit {

  @Input() baseCurrency: ICurrency = {currency: 'USD', exchangeRate: 0.7598199759292418};

  constructor() {
  }

  ngOnInit(): void {
  }

}

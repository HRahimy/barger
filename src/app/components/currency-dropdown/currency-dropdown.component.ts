import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from "../../interfaces/currency.interface";

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.css']
})
export class CurrencyDropdownComponent implements OnInit {
  @Input() label: string = 'Currency';
  @Input() options: ICurrency[] = [{currency: 'USD'}];
  @Input() initialValue?: ICurrency;
  currentValue: ICurrency = {currency: 'USD'};

  constructor() {
  }

  ngOnInit(): void {
  }

  selectCurrency(event: Event) {
    if (event) {
      const renderedEvent = event.target as HTMLInputElement;

      if (this.options.find(e => e.currency === renderedEvent.value)) {
        this.currentValue = {currency: renderedEvent.value};
        console.log(renderedEvent.value)
      }
    }
  }

}

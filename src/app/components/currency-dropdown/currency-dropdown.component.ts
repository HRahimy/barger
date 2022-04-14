import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICurrency} from '../../interfaces/currency.interface';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.css']
})
export class CurrencyDropdownComponent implements OnInit {
  @Input() label: string = 'Currency';

  @Input()
  get options(): ICurrency[] {
    throw new Error('Attribute "options" is required');
  }

  set options(value: ICurrency[]) {
    Object.defineProperty(this, 'options', {
      value,
      writable: true,
      configurable: true
    });
  }

  @Input()
  get initialValue(): ICurrency {
    throw new Error('Attribute "initialValue" is required');
  }

  set initialValue(value: ICurrency) {
    Object.defineProperty(this, 'initialValue', {
      value,
      writable: true,
      configurable: true
    });
  }

  currentValue: ICurrency = {currency: ''};

  @Output() currencySelected = new EventEmitter<ICurrency>();

  constructor() {
  }

  ngOnInit(): void {
    this.currentValue = this.initialValue;
  }

  selectCurrency(event: Event) {
    if (event) {
      const renderedEvent = event.target as HTMLInputElement;

      const selectedCurrency = this.options.find(e => e.currency === renderedEvent.value);
      if (selectedCurrency) {
        this.currentValue = selectedCurrency;
        this.currencySelected.emit(this.currentValue);
      }
    }
  }

}

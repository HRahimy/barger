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
  get options(): string[] {
    throw new Error('Attribute "options" is required');
  }

  set options(value: string[]) {
    Object.defineProperty(this, 'options', {
      value,
      writable: true,
      configurable: true
    });
  }

  @Input()
  get initialValue(): string {
    throw new Error('Attribute "initialValue" is required');
  }

  set initialValue(value: string) {
    Object.defineProperty(this, 'initialValue', {
      value,
      writable: true,
      configurable: true
    });
  }

  currentValue: string = '';

  @Output() currencySelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.currentValue = this.initialValue;
  }

  selectCurrency(event: Event) {
    if (event) {
      const renderedEvent = event.target as HTMLInputElement;

      const selectedCurrency = this.options.find(e => e === renderedEvent.value);
      if (selectedCurrency) {
        this.currentValue = selectedCurrency;
        this.currencySelected.emit(this.currentValue);
      }
    }
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {CostItemSubCostType} from '../../interfaces/cost-item.interface';

@Component({
  selector: 'app-sub-cost-display',
  templateUrl: './sub-cost-display.component.html',
  styleUrls: ['./sub-cost-display.component.css']
})
export class SubCostDisplayComponent implements OnInit {
  subCostTypes = CostItemSubCostType;
  @Input() subCostType: CostItemSubCostType = CostItemSubCostType.Quoted;

  @Input()
  get baseCurrencyLabel(): string {
    throw new Error('Attribute "baseCurrencyLabel" is required');
  }

  set baseCurrencyLabel(value: string) {
    Object.defineProperty(this, 'baseCurrencyLabel', {
      value,
      writable: true,
      configurable: true
    });
  }

  @Input()
  get selectedCurrencyLabel(): string {
    throw new Error('Attribute "selectedCurrencyLabel" is required');
  }

  set selectedCurrencyLabel(value: string) {
    Object.defineProperty(this, 'selectedCurrencyLabel', {
      value,
      writable: true,
      configurable: true
    });
  }

  @Input()
  get baseCurrencyValue(): number {
    throw new Error('Attribute "baseCurrencyValue" is required');
  }

  set baseCurrencyValue(value: number) {
    Object.defineProperty(this, 'baseCurrencyValue', {
      value,
      writable: true,
      configurable: true
    });
  }

  @Input()
  get selectedCurrencyValue(): number {
    throw new Error('Attribute "selectedCurrencyValue" is required');
  }

  set selectedCurrencyValue(value: number) {
    Object.defineProperty(this, 'selectedCurrencyValue', {
      value,
      writable: true,
      configurable: true
    });
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

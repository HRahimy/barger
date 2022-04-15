import {Component, Input, OnInit} from '@angular/core';
import {ICost} from '../../interfaces/cost.interface';
import {CostItemSubCostType, ICostItemSubCost} from '../../interfaces/cost-item.interface';

@Component({
  selector: 'app-cost-table',
  templateUrl: './cost-table.component.html',
  styleUrls: ['./cost-table.component.css']
})
export class CostTableComponent implements OnInit {
  subCostType = CostItemSubCostType;
  itemsToShowMessagesOf: number[] = [];

  // Solution to making `@Input()` properties required
  // and non-nullable: https://stackoverflow.com/a/50293330/5472560
  @Input()
  get cost(): ICost {
    throw new Error('Attribute "cost" is required');
  }

  set cost(value: ICost) {
    Object.defineProperty(this, 'cost', {
      value,
      writable: true,
      configurable: true
    });
  }

  @Input()
  get selectedCurrency(): string {
    throw new Error('Attribute "selectedCurrency" is required');
  }

  set selectedCurrency(value: string) {
    Object.defineProperty(this, 'selectedCurrency', {
      value,
      writable: true,
      configurable: true
    });
  }

  @Input()
  get baseCurrency(): string {
    throw new Error('Attribute "baseCurrency" is required');
  }

  set baseCurrency(value: string) {
    Object.defineProperty(this, 'baseCurrency', {
      value,
      writable: true,
      configurable: true
    });
  }

  @Input()
  get rateFromBaseToSelectedCurrency(): number {
    throw new Error('Attribute "rateFromBaseToSelectedCurrency" is required');
  }

  set rateFromBaseToSelectedCurrency(value: number) {
    Object.defineProperty(this, 'rateFromBaseToSelectedCurrency', {
      value,
      writable: true,
      configurable: true
    });
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  getSubCostWithType(costItemId: number, type: CostItemSubCostType): ICostItemSubCost {
    const costItem = this.cost.costItems.find(e => e.id === costItemId);
    if (!costItem) {
      throw new Error(`CostItem: 'id: ${costItemId}' not found`);
    }

    switch (type) {
      case CostItemSubCostType.Quoted:
        const resultQuotedCost = costItem.costs.find(e => e.type === type);
        if (!resultQuotedCost) {
          throw new Error(`SubCost for "CostItem: 'id: ${costItemId}'" of ${type} type not found`)
        }
        return resultQuotedCost;
      case CostItemSubCostType.Screened:
        const resultScreenedCost = costItem.costs.find(e => e.type === type);
        if (!resultScreenedCost) {
          throw new Error(`SubCost for "CostItem: 'id: ${costItemId}'" of ${type} type not found`)
        }
        return resultScreenedCost;
    }
  }

  getTotalCostOfType(type: CostItemSubCostType): number {
    let result = 0;
    const typeSubCosts = this.cost.costItems.map(e => {
      return e.costs.filter(f => f.type === type).forEach(g => result += g.amount);
    });

    return result;
  }

  toggleMessages(costItemId: number): void {
    const existingCostItemId = this.itemsToShowMessagesOf.find(e => e === costItemId);

    if (existingCostItemId) {
      this.itemsToShowMessagesOf = this.itemsToShowMessagesOf.filter(e => e !== costItemId);
    } else {
      this.itemsToShowMessagesOf = [...this.itemsToShowMessagesOf, costItemId];
    }
  }

  showMessages(costItemId: number): boolean {
    const existingCostItemId = this.itemsToShowMessagesOf.find(e => e === costItemId);

    return !!existingCostItemId;
  }

}

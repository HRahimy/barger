import {Component, Input, OnInit} from '@angular/core';
import {ICost} from '../../interfaces/cost.interface';

@Component({
  selector: 'app-cost-table',
  templateUrl: './cost-table.component.html',
  styleUrls: ['./cost-table.component.css']
})
export class CostTableComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}

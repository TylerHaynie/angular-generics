import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GenericInput } from '../generic-control/generic-input';

@Component({
  selector: 'ag-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RangeComponent extends GenericInput {
  @Input() type: 'date' | 'number' = 'number';

  @Input() fromLabel: string = 'from';
  fromValue: any;

  @Input() toLabel: string = 'to';
  toValue: any;

  constructor() {
    super();
  }

  rangeChange(): void {
    this.value = { from: this.fromValue, to: this.toValue };
  }
}

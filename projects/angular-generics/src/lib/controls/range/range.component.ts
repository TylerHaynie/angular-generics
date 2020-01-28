import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider, GenericInputAccessor } from '../generic-control/generic-input-accessor';

@Component({
  selector: 'ag-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
  providers: [MakeProvider(RangeComponent)],
  encapsulation: ViewEncapsulation.None
})
export class RangeComponent extends GenericInputAccessor {
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

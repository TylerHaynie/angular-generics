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

  startValue: any;
  endValue: any;

  constructor() {
    super();
  }

  rangeChange(): void {
    this.value = { start: this.startValue, end: this.endValue };
  }
}

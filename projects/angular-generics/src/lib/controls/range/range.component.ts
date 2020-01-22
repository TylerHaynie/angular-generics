import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../generic-control/abstract-value-accessor';
import { ValueTypeHelpers } from '../generic-control/value-type-helpers';

@Component({
  selector: 'ag-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
  providers: [MakeProvider(RangeComponent)],
  encapsulation: ViewEncapsulation.None
})
export class RangeComponent extends AbstractValueAccessor {
  // General
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() width: number | string = 'inherit';
  @Input() height: number | string = 'inherit';

  @Input() type: 'date' | 'number' = 'number';

  // Label
  @Input() showLabel: boolean = true;
  @Input() floatLabel: boolean = true;
  @Input() placeLabel: string = 'bottom start';

  @Input() fromLabel: string = 'from';
  fromValue: any;

  @Input() toLabel: string = 'to';
  toValue: any;

  private _helpers: ValueTypeHelpers = new ValueTypeHelpers();
  constructor() {
    super();
  }

  rangeChange(): void {
    this.value = { from: this.fromValue, to: this.toValue };
  }

  isNumber(value: string | number): boolean {
    return this._helpers.isNumber(value);
  }
}

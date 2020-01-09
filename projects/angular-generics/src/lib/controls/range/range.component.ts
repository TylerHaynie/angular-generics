import { Component, Input } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../../helpers/abstract-value-accessor';
import { ValueTypeHelpers } from '../../helpers/value-type-helpers';

@Component({
  selector: 'ag-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
  providers: [MakeProvider(RangeComponent)]
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
  @Input() labelPosition: 'above' | 'left' = 'left';
  @Input() labelPlacement: string = 'center start';
  @Input() showLabel: boolean = true;

  @Input() fromLabel: string = 'from';
  fromValue: any;

  @Input() toLabel: string = 'to';
  toValue: any;

  _helpers: ValueTypeHelpers = new ValueTypeHelpers();
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

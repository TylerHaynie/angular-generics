import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../../helpers/abstract-value-accessor';
import { ValueTypeHelpers } from '../../helpers/value-type-helpers';

@Component({
  selector: 'ag-input',
  templateUrl: './input.component.html',
  styleUrls: [
    './input.component.css',
    './input-checkbox.css'],
  providers: [MakeProvider(InputComponent)],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent extends AbstractValueAccessor {
  // General
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() type: string = 'text';
  @Input() subtype: string = 'default';

  @Input() placeholder: string = '';
  @Input() width: number | string = 'inherit';
  @Input() height: number | string = 'inherit';

  // Label
  @Input() showLabel: boolean = true;
  @Input() floatLabel: boolean = true;
  @Input() placeLabel: string = 'bottom start';

  // Text Area
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  _helpers: ValueTypeHelpers = new ValueTypeHelpers();

  constructor() {
    super();
  }

  isNumber(value: string | number): boolean {
    return this._helpers.isNumber(value);
  }
}

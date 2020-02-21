import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GenericInputAccessor, ValueAccessProvider } from '../generic-control/generic-input-accessor';
import { IGenericInput } from '../generic-control/generic-input.interface';

@Component({
  selector: 'ag-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css',
    '../../../../styles/base.css'],
  providers: [ValueAccessProvider(RangeComponent)],
  encapsulation: ViewEncapsulation.None
})
export class RangeComponent extends GenericInputAccessor implements IGenericInput {
  // implementation
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Input() label: string;
  @Input() floatLabel: boolean;
  @Input() placeLabel: string;
  @Input() placeholder: string;

  @Input() width: string | number;
  @Input() height: string | number;

  @Input() type: string = 'number';

  // component specific
  startValue: any;
  endValue: any;

  constructor() {
    super();
  }

  rangeChange(): void {
    this.value = { start: this.startValue, end: this.endValue };
  }
}

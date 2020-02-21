import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ValueTypeHelpers } from '../generic-control/value-type-helpers';

@Component({
  selector: 'ag-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css',
    '../../../../styles/base.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Input() label: string;
  @Input() floatLabel: boolean;
  @Input() placeLabel: string;

  @Input() width: number | string;
  @Input() height: number | string;

  typeHelpers: ValueTypeHelpers = new ValueTypeHelpers();

  constructor() { }
}

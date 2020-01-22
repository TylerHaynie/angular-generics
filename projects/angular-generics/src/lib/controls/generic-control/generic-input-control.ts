import { Input } from '@angular/core';
import { AbstractValueAccessor } from './abstract-value-accessor';
import { ValueTypeHelpers } from './value-type-helpers';
import { IGenericInputControl } from './generic-input-control.interface';

export class GenericInputControl extends AbstractValueAccessor implements IGenericInputControl {
  @Input() name: string;
  @Input() id: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() label: string;
  @Input() floatLabel: boolean;
  @Input() placeLabel: string;
  @Input() width: number | string;
  @Input() height: number | string;
  @Input() placeholder: string;

  type: string = 'text';

  protected typeHelpers: ValueTypeHelpers;

  constructor() {
    super();
    this.typeHelpers = new ValueTypeHelpers();
  }

  isNumber(value: string | number): boolean {
    return this.typeHelpers.isNumber(value);
  }
}
// ref: https://stackoverflow.com/a/37786142/1204412

import { forwardRef, Provider, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueTypeHelpers } from './value-type-helpers';

export abstract class GenericInputAccessor implements ControlValueAccessor {
  @Input() name: string;
  @Input() id: string;
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() label: string;
  @Input() floatLabel: boolean = true;
  @Input() placeLabel: string = 'bottom start';
  @Input() width: number | string;
  @Input() height: number | string;
  @Input() placeholder: string;

  private typeHelpers: ValueTypeHelpers = new ValueTypeHelpers();

  _value: any = '';
  get value(): any { return this._value; }
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  writeValue(value: any) {
    this._value = value;
    this.onChange(value);
  }

  onChange = (_) => { };

  onTouched = () => { };

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  isNumber(value: string | number): boolean {
    return this.typeHelpers.isNumber(value);
  }
}

export function MakeProvider(type: any): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}

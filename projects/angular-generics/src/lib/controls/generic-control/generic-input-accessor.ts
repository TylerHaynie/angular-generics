import { forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueTypeHelpers } from './value-type-helpers';

export function ValueAccessProvider(type: any): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true,
  };
}

export class GenericInputAccessor implements ControlValueAccessor {

  private typeHelpers: ValueTypeHelpers = new ValueTypeHelpers();
  val = ''              // this is the updated value that the class accesses

  constructor() { }

  onChange: any = () => { }
  onTouch: any = () => { }

  get value(): any {
    return this.val ? this.val : '';
  }

  set value(v) {      // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = v ? v : '';
    this.onChange(v)
    this.onTouch(v)
  }

  // this method sets the value programmatically
  writeValue(v: any) {
    this.value = v
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  isNumber(v: string | number): boolean {
    return this.typeHelpers.isNumber(v);
  }
}

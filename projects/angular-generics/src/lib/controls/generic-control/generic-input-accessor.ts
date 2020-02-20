// ref: https://stackoverflow.com/a/37786142/1204412

import { forwardRef, Provider, Input, HostListener } from '@angular/core';
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


  // @Input() name: string;
  // @Input() id: string;
  // @Input() type: string;
  // @Input() disabled: boolean;
  // @Input() required: boolean;
  // @Input() label: string = '';
  // @Input() floatLabel: boolean = true;
  // @Input() placeLabel: string = 'bottom start';
  // @Input() width: number | string;
  // @Input() height: number | string;
  // @Input() placeholder: string = '';

  // private typeHelpers: ValueTypeHelpers = new ValueTypeHelpers();

  //   _value: any = '';
  //   get value(): any { return this._value ? this._value : ''; }
  //   set value(v: any) {
  //     if (v !== this._value) {
  //       this._value = v ? v : '';
  //       this.onChange(v);
  //     }
  //   }

  //   writeValue(value: any) {
  //     this._value = value ? value : '';
  //     this.onChange(value);
  //   }

  //   // onChange = (_) => { };

  //   onTouched = () => { };

  //   @HostListener('change', ['$event'])
  //   @HostListener('ngModelChange', ['$event'])
  //   onChange(event) {
  //     console.log(event.target.value);
  //   }

  //   registerOnChange(fn: (_: any) => void): void {
  //     this.onChange = fn;
  //   }

  //   registerOnTouched(fn: () => void): void {
  //     this.onTouched = fn;
  //   }

  //   isNumber(value: string | number): boolean {
  //     return this.typeHelpers.isNumber(value);
  //   }
  // }

  // export function MakeProvider(type: any): Provider {
  //   return {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => type),
  //     multi: true,
  //   };
//}

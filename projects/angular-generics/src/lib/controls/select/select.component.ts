import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../generic-control/abstract-value-accessor';
import { ValueTypeHelpers } from '../generic-control/value-type-helpers';

@Component({
  selector: 'ag-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [MakeProvider(SelectComponent)],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent extends AbstractValueAccessor {
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  @Input() placeholder: string = '';
  @Input() width: number | string = 'inherit';
  @Input() height: number | string = 'inherit';

  @Input() showLabel: boolean = true;
  @Input() floatLabel: boolean = true;
  @Input() placeLabel: string = 'bottom start';

  @Input() displayName: string;
  @Input() options: any[] = [];
  @Input() multiple: boolean = false;

  @Output() selectionChange: EventEmitter<any>;

  private _helpers: ValueTypeHelpers = new ValueTypeHelpers();

  constructor() {
    super();
    this.selectionChange = new EventEmitter<any>();
  }

  selectionChanged(val: any) {
    this.selectionChange.emit(val);
  }

  compareSelect(c1: any, c2: any): boolean {
    if (c1 && c2) {
      if (c1.id && c2.id) {
        return c1.id === c2.id;
      }
      else {
        return c1 === c2;
      }
    }

    return false;
  }

  isNumber(value: string | number): boolean {
    return this._helpers.isNumber(value);
  }
}

import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { GenericInputAccessor, ValueAccessProvider } from '../generic-control/generic-input-accessor';
import { IGenericInput } from '../generic-control/generic-input.interface';

@Component({
  selector: 'ag-select',
  templateUrl: './select.component.html',
  styleUrls: ['../../../../styles/base.css'],
  providers: [ValueAccessProvider(SelectComponent)],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent extends GenericInputAccessor implements IGenericInput {
  // implementation
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Input() label: string;
  @Input() labelPos: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() placeholder: string;

  @Input() type: string;

  // component specific
  @Input() display: string;
  @Input() options: any[] = [];
  @Input() multiple: boolean = false;

  @Output() selectionChange: EventEmitter<any>;

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
}

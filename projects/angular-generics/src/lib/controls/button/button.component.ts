import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../../helpers/abstract-value-accessor';
import { ValueTypeHelpers } from '../../helpers/value-type-helpers';

@Component({
  selector: 'ag-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [MakeProvider(ButtonComponent)],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent extends AbstractValueAccessor {
  @Input() flat: boolean = false;
  @Input() width: number | string = 'inherit';
  @Input() fontSize: number | string = 'inherit';
  @Input('disabled') disableControl: boolean = false;

  @Output() click = new EventEmitter();
  
  _helpers: ValueTypeHelpers = new ValueTypeHelpers();

  constructor() {
    super();
  }

  onClick(event: Event) {
    if (!this.disableControl) {
      event.stopPropagation();
      this.click.next();
    }
    else {
      event.stopImmediatePropagation();
    }
  }

  isNumber(value: string | number): boolean {
    return this._helpers.isNumber(value);
  }
}

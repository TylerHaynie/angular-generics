import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { ValueTypeHelpers } from '../generic-control/value-type-helpers';

@Component({
  selector: 'ag-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css',
  '../../../../styles/base.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() width: number | string = 'inherit';
  @Input() height: number | string = 'inherit';
  @Input() fontSize: number | string = 'inherit';

  @Input('disabled') disableControl: boolean = false;

  @Output() click = new EventEmitter();

  private _helpers: ValueTypeHelpers = new ValueTypeHelpers();

  constructor() {

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

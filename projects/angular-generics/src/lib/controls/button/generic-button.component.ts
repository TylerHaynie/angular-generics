import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AbstractValueAccessor } from '../../helpers/abstract-value-accessor';

@Component({
  selector: 'ag-button',
  templateUrl: './generic-button.component.html'
})
export class GenericButtonComponent extends AbstractValueAccessor {
  @Input() flat: boolean = false;
  @Input() width: number | string = 'auto';
  @Input() fontSize: number | string = 'auto';
  @Input('disabled') disableControl: boolean = false;

  @Output() click = new EventEmitter();

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
    return ((value != null) && !isNaN(Number(value.toString())));
  }

}

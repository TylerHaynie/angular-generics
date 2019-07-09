import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractValueAccessor } from '../../helpers/abstract-value-accessor';

@Component({
  selector: 'ag-button',
  templateUrl: './generic-button.component.html'
})
export class GenericButtonComponent extends AbstractValueAccessor {
  @Input() flat: boolean = false;
  @Input() disabled: boolean = false;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../../helpers/abstract-value-accessor';

@Component({
  selector: 'ag-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['../../styles/generic.css'],
  providers: [MakeProvider(GenericInputComponent)]
})
export class GenericInputComponent extends AbstractValueAccessor {
  // text box
  @Input() type: string = 'text';
  @Input() placeholder: string = 'enter some text...';

  // text area
  @Input() isTextArea: boolean = false;
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  // label
  @Input() labelPosition: 'top' | 'left' | 'right' | 'bottom' = 'left';
  @Input() labelAlign: 'top' | 'center' | 'bottom' = 'bottom';
  @Input() labelMove: 'left' | 'center' | 'right' = 'left';
}

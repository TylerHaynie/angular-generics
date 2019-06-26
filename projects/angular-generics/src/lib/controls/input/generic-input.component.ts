import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../../helpers/abstract-value-accessor';

@Component({
  selector: 'ag-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['../../styles/controls/input.css'],
  providers: [MakeProvider(GenericInputComponent)]
})
export class GenericInputComponent extends AbstractValueAccessor {
  // text box
  @Input() type: string = 'text';
  @Input() placeholder: string = 'input...';
  @Input() labelPlacement: string = 'end start';

  // text area
  @Input() isTextArea: boolean = false;
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  // // label
  @Input() labelPosition: 'top' | 'left' = 'left';
}

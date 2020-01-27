import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GenericInput } from '../generic-control/generic-input';

@Component({
  selector: 'ag-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent extends GenericInput {
  @Input() type: string = 'text';

  @Input() subtype: string;
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  constructor() {
    super();
  }
}

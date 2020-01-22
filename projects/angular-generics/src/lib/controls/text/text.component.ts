import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '../generic-control/abstract-value-accessor';
import { GenericInputControl } from '../generic-control/generic-input-control';

@Component({
  selector: 'ag-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  providers: [MakeProvider(TextComponent)],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent extends GenericInputControl {
  // override base property
  type: string = 'text';


  @Input() subtype: string;
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  constructor() {
    super();
  }
}

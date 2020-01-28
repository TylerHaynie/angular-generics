import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider, GenericInputAccessor } from '../generic-control/generic-input-accessor';

@Component({
  selector: 'ag-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  providers: [MakeProvider(TextComponent)],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent extends GenericInputAccessor {
  @Input() type: string = 'text';

  @Input() subtype: string;
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  constructor() {
    super();
  }
}

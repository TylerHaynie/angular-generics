import { Component, Input, ViewEncapsulation, HostListener } from '@angular/core';
import { ValueAccessProvider, GenericInputAccessor } from '../generic-control/generic-input-accessor';
import { IGenericInput } from '../generic-control/generic-input.interface';

@Component({
  selector: 'ag-text',
  templateUrl: './text.component.html',
  styleUrls: ['../../../../styles/base.css'],
  providers: [ValueAccessProvider(TextComponent)],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent extends GenericInputAccessor implements IGenericInput {
  // implementation
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Input() label: string;
  @Input() labelPos: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() placeholder: string;

  @Input() type: string = 'text';
  @Input() subtype: string;

  // component specific
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  constructor() {
    super();
  }
}

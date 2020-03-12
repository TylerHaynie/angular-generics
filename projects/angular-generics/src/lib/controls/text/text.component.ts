import { Component, Input, ViewEncapsulation, HostListener } from '@angular/core';
import { ValueAccessProvider, GenericInputAccessor } from '../generic-control/generic-input-accessor';
import { IGenericInput } from '../generic-control/generic-input.interface';

@Component({
  selector: 'ag-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css',
    '../../../../styles/base.css'],
  providers: [ValueAccessProvider(TextComponent)],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent extends GenericInputAccessor implements IGenericInput {
  // implementation
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Input() label: string;
  @Input() floatLabel: boolean = true;
  @Input() placeLabel: string = 'end start';
  @Input() placeholder: string;

  @Input() width: string | number;
  @Input() height: string | number;

  @Input() type: string = 'text';
  @Input() subtype: string;

  // component specific
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  constructor() {
    super();
  }
}

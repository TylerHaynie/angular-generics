import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GenericInputAccessor, ValueAccessProvider } from '../generic-control/generic-input-accessor';
import { IGenericInput } from '../generic-control/generic-input.interface';

@Component({
  selector: 'ag-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css',
    '../../../../styles/base.css'],
  providers: [ValueAccessProvider(FileComponent)],
  encapsulation: ViewEncapsulation.None
})
export class FileComponent extends GenericInputAccessor implements IGenericInput {
  // implementation
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() label: string;
  @Input() floatLabel: boolean;
  @Input() placeLabel: string;
  @Input() placeholder: string;
  @Input() width: string | number;
  @Input() height: string | number;

  // component specific
  @Input() multiple: boolean = false;

  constructor() {
    super();
  }
}

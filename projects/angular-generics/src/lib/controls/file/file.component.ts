import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GenericInputAccessor, ValueAccessProvider } from '../generic-control/generic-input-accessor';
import { IGenericInput } from '../generic-control/generic-input.interface';

@Component({
  selector: 'ag-file',
  templateUrl: './file.component.html',
  styleUrls: ['../../../../styles/base.css'],
  providers: [ValueAccessProvider(FileComponent)],
    encapsulation: ViewEncapsulation.None
})
export class FileComponent extends GenericInputAccessor implements IGenericInput {
  // implementation
  @Input() inputType: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() label: string;
  @Input() labelPos: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() placeholder: string;

  // component specific
  @Input() multiple: boolean = false;

  constructor() {
    super();
  }
}

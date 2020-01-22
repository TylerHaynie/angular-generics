import { Component, Input, ViewEncapsulation, Directive } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../generic-control/abstract-value-accessor';
import { ValueTypeHelpers } from '../generic-control/value-type-helpers';

@Directive({
  selector: 'genericInput',
  providers: [MakeProvider(InputDirective)],
})
export class InputDirective extends AbstractValueAccessor {
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() width: number | string = 'inherit';
  @Input() height: number | string = 'inherit';

  @Input() placeholder: string = '';

  @Input() showLabel: boolean = true;
  @Input() floatLabel: boolean = true;
  @Input() placeLabel: string = 'bottom start';

  private _helpers: ValueTypeHelpers = new ValueTypeHelpers();

  constructor() {
    super();
  }

  isNumber(value: string | number): boolean {
    return this._helpers.isNumber(value);
  }
}

@Component({
  selector: 'ag-file',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent {
  @Input() multiple: boolean = false;

  constructor() { }
}

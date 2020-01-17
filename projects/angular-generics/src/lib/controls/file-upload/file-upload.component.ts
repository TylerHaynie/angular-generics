import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../../helpers/abstract-value-accessor';
import { ValueTypeHelpers } from '../../helpers/value-type-helpers';

@Component({
  selector: 'ag-file',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [MakeProvider(FileUploadComponent)],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent extends AbstractValueAccessor {
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() width: number | string = 'inherit';
  @Input() height: number | string = 'inherit';

  @Input() placeholder: string = '';

  @Input() showLabel: boolean = true;
  @Input() floatLabel: boolean = true;
  @Input() placeLabel: string = 'bottom start';

  @Input() multiple: boolean = false;

  _helpers: ValueTypeHelpers = new ValueTypeHelpers();

  constructor() {
    super();
  }

  isNumber(value: string | number): boolean {
    return this._helpers.isNumber(value);
  }
}

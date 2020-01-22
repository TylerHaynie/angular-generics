import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ValueTypeHelpers } from '../../controls/generic-control/value-type-helpers';

@Component({
  selector: 'ag-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent {
  @Input() height: string | number = 'inherit';
  @Input() width: string | number = 'inherit';
  @Input() gap: string | number;
  @Input() pad: string | number;
  @Input() place: string = 'start';

  @Input() flow: string = 'row';
  @Input() rows: number | string = 'auto';
  @Input() cols: number | string = 'auto';

  private typeHelper: ValueTypeHelpers = new ValueTypeHelpers();

  isNumber(value: string | number): boolean {
    return this.typeHelper.isNumber(value);
  }
}

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ValueTypeHelpers } from '../../controls/generic-control/value-type-helpers';

@Component({
  selector: 'ag-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent {
  @Input() height: string | number;
  @Input() width: string | number;
  @Input() gap: string | number;
  @Input() pad: string | number;
  @Input() place: string;

  @Input() flow: string;
  @Input() rows: number | string = 1;
  @Input() cols: number | string = 1;

  private typeHelper: ValueTypeHelpers = new ValueTypeHelpers();

  isNumber(value: string | number): boolean {
    return this.typeHelper.isNumber(value);
  }
}

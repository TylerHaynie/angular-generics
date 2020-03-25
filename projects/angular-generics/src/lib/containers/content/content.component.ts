import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ValueTypeHelpers } from '../../controls/generic-control/value-type-helpers';

@Component({
  selector: 'agc',
  templateUrl: './content.component.html',
  styleUrls: ['../../../../styles/base.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent {
  @Input() height: string | number;
  @Input() width: string | number;
  @Input() gap: string | number;
  @Input() pad: string | number;
  @Input() anchor: string;

  @Input() flow: string;
  @Input() rows: number | string;
  @Input() cols: number | string;

  @Input() forceUp: number | string;
  @Input() forceDown: number | string;
  @Input() forceLeft: number | string;
  @Input() forceRight: number | string;

  private typeHelper: ValueTypeHelpers = new ValueTypeHelpers();

  constructor() { }

  isNumber(value: string | number): boolean {
    return this.typeHelper.isNumber(value);
  }
}

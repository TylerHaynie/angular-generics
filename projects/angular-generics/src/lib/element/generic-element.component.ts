import { Component, Input } from '@angular/core';
@Component({
  selector: 'ag-div',
  templateUrl: './generic-element.component.html',
})
export class GenericElementComponent {
  @Input() height: string | number = 'inherit';
  @Input() width: string | number = 'inherit';
  @Input() gap: string | number;
  @Input() pad: string | number;
  @Input() placeContent: string;

  @Input() flow: string = 'row';
  @Input() rows: number | string = 'auto';
  @Input() columns: number | string = 'auto';

  isNumber(value: string | number): boolean {
    return ((value != null) && !isNaN(Number(value.toString())));
  }
}

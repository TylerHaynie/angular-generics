import { Component, Input } from '@angular/core';
@Component({
  selector: 'ag-div',
  templateUrl: './generic-element.component.html',
})
export class GenericElementComponent {
  @Input() height: string | number = 'initial';
  @Input() gap: string | number = 'none';
  @Input() pad: string | number = 'none';
  @Input() flow: 'column' | 'row' | 'row dense' = 'row dense';
  @Input() placement: string;
  @Input() rows: number | string = 'auto';
  @Input() columns: number | string = 'auto';


  isNumber(value: string | number): boolean {
    return ((value != null) && !isNaN(Number(value.toString())));
  }
}

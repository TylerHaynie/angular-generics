import { Component, Input } from '@angular/core';
@Component({
  selector: 'ag-el',
  templateUrl: './generic-element.component.html',
})
export class GenericElementComponent {
  @Input() height: string = 'initial';
  @Input() gap: string = 'none';
  @Input() pad: string = 'none';
  @Input() flow: 'column' | 'row' | 'row dense' = 'row dense';
  @Input() placement: string;
  @Input() rows: number;
  @Input() columns: number;
}

import { Component, Input } from '@angular/core';
@Component({
  selector: 'ag-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
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

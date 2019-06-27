import { Component, Input } from '@angular/core';
@Component({
  selector: 'ag-column',
  templateUrl: './generic-column.component.html',
  styleUrls: ['../../styles/layout/page.css']
})
export class GenericColumnComponent {
  @Input() gap: string = '0';
  @Input() pad: string = '0';
  @Input() placement: string;
}

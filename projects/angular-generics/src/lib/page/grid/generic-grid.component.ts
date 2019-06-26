import { Component, Input } from '@angular/core';
@Component({
  selector: 'ag-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['../../styles/layout/page.css']
})
export class GenericGridComponent {
  @Input() gap: string = 'none';
  @Input() pad: string = 'none';
  @Input() flow: 'column' | 'row' | 'row dense' = 'row dense';
  @Input() placement: string = 'start stretch';
}

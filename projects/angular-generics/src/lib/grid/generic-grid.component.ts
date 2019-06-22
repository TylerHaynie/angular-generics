import { Component, Input } from '@angular/core';

@Component({
  selector: 'generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.css']
})
export class GenericGridComponent {
  @Input() columns: number | 'auto' = 'auto';
  @Input() gap: string = '0';
  @Input() rows: number | 'auto' = 'auto';

  constructor() {

  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.css']
})
export class GenericGridComponent {
  @Input() columns: number = 4;
  @Input() gap: string = '5px';
  @Input() rows: number | 'auto' = 2;
}

import { Component, Input } from '@angular/core';
@Component({
  selector: 'generic-row',
  templateUrl: './generic-row.component.html',
  styleUrls: ['../../styles/layout/page.css']
})
export class GenericRowComponent {
  @Input() gap: string = '0';
  @Input() pad: string = '0';
}

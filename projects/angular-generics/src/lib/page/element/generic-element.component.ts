import { Component, Input } from '@angular/core';
@Component({
  selector: 'ag-element',
  templateUrl: './generic-element.component.html',
  styleUrls: ['../../styles/layout/page.css']
})
export class GenericElementComponent {
  @Input() gap: string = 'none';
  @Input() pad: string = 'none';
  @Input() placement: string;
  @Input() flow: 'column' | 'row';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['../styles/layout/page.css']
})
export class GenericPageComponent {
  @Input() pad: string = '0';
  @Input() height: string = '100%';
  @Input() placement: string;
}

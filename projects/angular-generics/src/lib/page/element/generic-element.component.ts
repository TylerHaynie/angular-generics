import { Component, Input } from '@angular/core';
@Component({
  selector: 'ag-element',
  templateUrl: './generic-element.component.html',
  styleUrls: ['../../styles/layout/page.css']
})
export class GenericElementComponent {
  @Input() position: 'top-left' | 'top-center' | 'top-right' |
                     'center-left' | 'center' | 'center-right' |
                     'bottom-left' | 'bottom-center' | 'bottom-right' = 'center-left';
}

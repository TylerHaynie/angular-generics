import { Component, Input } from '@angular/core';

@Component({
  selector: 'generic-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['../styles/layout/page.css']
})
export class GenericPageComponent {
  @Input() pad: string = '0';
  @Input() height: string = '100%';
}

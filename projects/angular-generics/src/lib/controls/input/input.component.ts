import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ag-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  @Input() label: string;
  @Input() floatLabel: boolean = true;
  @Input() placeLabel: string = 'bottom start';

  @Input() width: number | string = 'inherit';
  @Input() height: number | string = 'inherit';

  constructor() { }

  hasLabel(): boolean {
    return this.label && this.label != '';
  }
}

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '../generic-control/generic-input-accessor';

@Component({
  selector: 'ag-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [MakeProvider(InputComponent)],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Input() label: string;
  @Input() floatLabel: boolean;
  @Input() placeLabel: string;

  @Input() width: number | string;
  @Input() height: number | string;

  constructor() { }
}

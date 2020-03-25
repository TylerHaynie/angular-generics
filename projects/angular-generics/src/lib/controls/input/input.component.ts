import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { ValueTypeHelpers } from '../generic-control/value-type-helpers';

@Component({
  selector: 'ag-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css',
    '../../../../styles/base.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Input() label: string;
  @Input() labelPos: 'top' | 'left' = 'top';

  typeHelpers: ValueTypeHelpers = new ValueTypeHelpers();

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.setProperty('--color', 'red');
  }
}

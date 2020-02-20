import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GenericInputAccessor, ValueAccessProvider } from '../generic-control/generic-input-accessor';
import { IGenericInput } from '../generic-control/generic-input.interface';

@Component({
  selector: 'ag-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  providers: [ValueAccessProvider(CheckComponent)],
  encapsulation: ViewEncapsulation.None
})
export class CheckComponent extends GenericInputAccessor implements IGenericInput {
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() label: string;
  @Input() floatLabel: boolean;
  @Input() placeLabel: string;
  @Input() placeholder: string;
  @Input() width: string | number;
  @Input() height: string | number;

  constructor() {
    super();
  }
}

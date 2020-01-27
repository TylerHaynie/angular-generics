import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GenericInput } from '../generic-control/generic-input';

@Component({
  selector: 'ag-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckComponent extends GenericInput {
  @Input() type: string;

  constructor() {
    super();
  }
}

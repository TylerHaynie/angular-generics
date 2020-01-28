import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider, GenericInputAccessor } from '../generic-control/generic-input-accessor';

@Component({
  selector: 'ag-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  providers: [MakeProvider(CheckComponent)],
  encapsulation: ViewEncapsulation.None
})
export class CheckComponent extends GenericInputAccessor {
  constructor() {
    super();
  }
}

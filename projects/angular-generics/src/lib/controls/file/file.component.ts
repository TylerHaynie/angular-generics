import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GenericInput } from '../generic-control/generic-input';

@Component({
  selector: 'ag-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FileComponent extends GenericInput {
  @Input() multiple: boolean = false;

  constructor() {
    super();
  }
}

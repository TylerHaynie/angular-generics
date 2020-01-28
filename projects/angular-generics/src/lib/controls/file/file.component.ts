import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider, GenericInputAccessor } from '../generic-control/generic-input-accessor';

@Component({
  selector: 'ag-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
  providers: [MakeProvider(FileComponent)],
  encapsulation: ViewEncapsulation.None
})
export class FileComponent extends GenericInputAccessor {
  @Input() multiple: boolean = false;

  constructor() {
    super();
  }
}

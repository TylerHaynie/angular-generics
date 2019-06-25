import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractValueAccessor } from '../../helpers/abstract-value-accessor';

@Component({
  selector: 'ag-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['../../styles/generic.css']
})
export class GenericButtonComponent extends AbstractValueAccessor {
  @Input() isEnabled: boolean = true;
  @Input() showIcon: boolean = false;
  @Input() flat: boolean = false;
  @Input() color: string = 'linear-gradient(to bottom, #336699 0%, #003366 100%)';
}

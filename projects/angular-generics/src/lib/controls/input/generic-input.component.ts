import { Component, Input, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../../helpers/abstract-value-accessor';
import { GenericApiService } from '../../services/generic-api.service';

@Component({
  selector: 'ag-input',
  templateUrl: './generic-input.component.html',
  providers: [MakeProvider(GenericInputComponent)]
})
export class GenericInputComponent extends AbstractValueAccessor implements OnChanges {
  // General
  @Input() disabled: boolean = false;
  @Input() customTemplate: TemplateRef<any>;

  // Label
  @Input() labelPosition: 'above' | 'left' = 'left';
  @Input() labelPlacement: string = 'end start';
  @Input() showLabel: boolean = true;
  @Input() fromLabel: string = 'from';
  @Input() toLabel: string = 'to';

  @Input() type: string = 'text';
  @Input() subtype: string = 'default';
  @Input() placeholder: string = '';

  // Text Area
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  // Source and Selection
  @Input() source: string;
  @Input() displayProperty: string;
  itemList: any[];
  currentSelection: any;

  fromValue: any;
  toValue: any;

  constructor(private api: GenericApiService) {
    super();
  }

  // For Select box
  ngOnChanges(changes: SimpleChanges) {
    if (changes.source) {
      const sourceChange = changes.source.currentValue !== changes.source.previousValue;
      if (sourceChange) {
        this.getItems();
      }
    }
  }

  getItems() {
    if (this.source) {
      this.api.get(this.source)
        .then((items) => {
          if (items) {
            this.itemList = items;
          }
        });
    }

  }

  rangeChange() {
    this.value = { from: this.fromValue, to: this.toValue };
  }
}

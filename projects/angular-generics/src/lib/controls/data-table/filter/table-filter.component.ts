import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { TableConfig } from '../models/table-config';
import { ColumnFilter } from '../models/column-filter';
import { ValueAccessProvider } from '../../generic-control/generic-input-accessor';

@Component({
  selector: 'ag-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss',
    '../../../../../styles/base.css'],
  providers: [ValueAccessProvider(TableFilterComponent)],
  encapsulation: ViewEncapsulation.None
})
export class TableFilterComponent {
  @Input() config: TableConfig;
  @Output() configChange: EventEmitter<TableConfig>;
  @Output() search: EventEmitter<null>;

  isOpen: boolean = true;

  constructor() {
    this.search = new EventEmitter<null>();
    this.configChange = new EventEmitter<TableConfig>();
  }

  searchClicked() {
    this.configChange.emit(this.config);
    this.search.emit();
  }

  resetSearch() {
    this.config.columns.forEach(column => {
      column.filter = new ColumnFilter();
    });
  }

}

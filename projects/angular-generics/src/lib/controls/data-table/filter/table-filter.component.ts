import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { TableColumn } from '../models/table-column';

@Component({
  selector: 'ag-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableFilterComponent {
  @Input() title: string = 'Filter';
  @Input() columns: TableColumn[] = [];
  @Output() filter: EventEmitter<TableColumn[]>;

  // tableConfig: TableConfig;

  constructor() {
    this.filter = new EventEmitter<TableColumn[]>();
  }

  applyFilter() {
    // this.tableConfig.filters.forEach(filter => {

    // });

    // this.columns.forEach(col => {
    //   if (col.filterValue == '' || col.filterValue == null) {
    //     col.filterValue = null;
    //   }
    // });

    // this.filter.emit(this.columns);
  }

  resetFilter() {
    // this.columns.forEach(column => {
    //   column.filterValue = null;
    // });
  }

}

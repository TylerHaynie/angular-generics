import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { GenericTableColumn } from '../table/generic-table-column';

@Component({
  selector: 'generic-table-filter',
  templateUrl: './generic-table-filter.component.html'
})
export class GenericTableFilterComponent<T> implements OnInit {
  @Input() showFilter: boolean = true;
  @Input() columns: GenericTableColumn[] = [];
  @Output() search: EventEmitter<{ [field: string]: any; }>;

  filters: { [field: string]: any; } = {};

  constructor() {
    this.search = new EventEmitter<{ [field: string]: any; }>();
  }

  ngOnInit() {

  }

  searchClicked() {
    this.search.emit(this.filters);
  }

  resetSearch() {
    this.filters = {};
  }

  // changeFilter(column: GenericTableColumn, value: any) {
  //   this.filters[column.id] = value;
  // }

}

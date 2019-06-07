import { Component, Input, OnInit, ViewChild, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { DataTableColumn } from './data-table-column';
import { DataTableSource } from './data-table-source';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SearchRequest } from '../services/search';

export class CustomAction {
  header: string = 'Custom Action';
  showHeader: boolean = true;
}

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
})
export class DataTableComponent<T> implements OnInit, AfterViewInit {
  // data
  @Input() columns: DataTableColumn[] = [];
  @Input() query: SearchRequest = new SearchRequest();

  // table settings
  @Input() showFooter: boolean = true;
  @Input() showHeader: boolean = true;

  // available actions
  @Input() allowNew: boolean = false;
  @Input() allowEdit: boolean = false;
  @Input() allowCreate: boolean = false;
  @Input() allowDelete: boolean = false;
  @Input() allowView: boolean = false;

  // custom actions
  @Input() allowCustomActions: boolean = false;
  @Input() customActions: string[];

  // events
  @Output() editAction: EventEmitter<T>;
  @Output() deleteAction: EventEmitter<T>;
  @Output() viewAction: EventEmitter<T>;
  @Output() customAction: EventEmitter<{ actionName: string, item: T }>;

  // Paging
  @Input() showPager: boolean = true;
  @ViewChild('paginator') paginator: MatPaginator;
  private pageSizeOptions: number[] = [5, 25, 50, 100, 250, 500, 1000];
  pageEvent: PageEvent;

  // Filter
  @Input() showFilter: boolean = true;

  private activeColumns: string[] = [];
  private filterVisible: boolean = true;

  constructor(private dataSource: DataTableSource<T>) {
    this.editAction = new EventEmitter<T>();
    this.deleteAction = new EventEmitter<T>();
    this.viewAction = new EventEmitter<T>();
    this.customAction = new EventEmitter<{ actionName: string, item: T }>();
  }

  ngOnInit() {
    this.activeColumns = this.columns.map(c => c.id);
    // add a column for action buttons
    this.activeColumns.push('actions');
  }

  ngAfterViewInit() {
    if (this.showPager && this.paginator) {
      this.query.page = 1;
      this.query.take = this.paginator.pageSize;
    }

    this.search();
  }

  search() {
    console.log(this.query);
    this.dataSource.search(this.query);
  }

  resetSearch() {

  }

  doEdit(item: T) {
    console.log('Edit', item);
    this.editAction.emit(item);
  }

  doDelete(item: T) {
    console.log('Delete', item);
    this.deleteAction.emit(item);
  }

  doView(item: T) {
    if (!this.allowView) { return; }

    console.log('View', item);
    this.viewAction.emit(item);
  }

  doCustom(actionName: string, item: T) {
    console.log('CustomAction', item);
    this.customAction.emit({ actionName: actionName, item: item });
  }

  filterChange(column: DataTableColumn, value: string) {
    this.query.filter[column.id] = value;
  }

  changePage(pEvent: PageEvent) {
    this.query.page = this.paginator.pageIndex + 1;
    this.query.take = this.paginator.pageSize;

    this.search();
  }

  doSort(sortEvent: { active: string, direction: 'asc' | 'dsc' }) {
    if (sortEvent.direction) {
      this.query.sort = {
        direction: 'asc',
        field: sortEvent.active
      };
    }
    else {
      this.query.sort = null;
    }

    this.search();
  }
}

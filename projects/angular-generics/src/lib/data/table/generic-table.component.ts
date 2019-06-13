import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { GenericSearchRequest } from '../../services/generic-search';
import { GenericDataSource } from '../datasource/generic-data-source';
import { GenericTableColumn } from './generic-table-column';

export class CustomAction {
  header: string = 'Custom Action';
  showHeader: boolean = true;
}

@Component({
  selector: 'generic-table',
  templateUrl: './generic-table.component.html',
})
export class GenericTableComponent<T> implements OnInit {
  // data
  @Input() columns: GenericTableColumn[] = [];
  @Input() query: GenericSearchRequest = new GenericSearchRequest();
  @Input() dataSource: GenericDataSource<T>;

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
  @Output() customAction: EventEmitter<T>;

  activeColumns: string[] = [];

  constructor() {
    this.editAction = new EventEmitter<T>();
    this.deleteAction = new EventEmitter<T>();
    this.viewAction = new EventEmitter<T>();
    this.customAction = new EventEmitter<T>();
  }

  ngOnInit() {
    this.activeColumns = this.columns.map(c => c.id);
    // add a column for action buttons
    this.activeColumns.push('actions');
  }

  search() {
    if (this.query) {
      console.log(this.query);
      this.dataSource.search(this.query);
    }
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

  doCustom(item: T) {
    console.log('CustomAction', item);
    this.customAction.emit(item);
  }

  doSort(sortEvent: { active: string, direction: 'asc' | 'dsc' }) {
    if (sortEvent.direction) {
      this.query.sort = { direction: sortEvent.direction, field: sortEvent.active };
    }
    else {
      this.query.sort = null;
    }

    this.search();
  }
}

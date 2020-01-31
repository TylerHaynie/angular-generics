import {
  Component, Input, EventEmitter,
  Output, OnChanges, SimpleChanges, OnInit
} from "@angular/core";
import { DecimalPipe, KeyValue } from '@angular/common';
import { TableDataSource } from './table-data-source';
import { map, reduce } from 'rxjs/operators';
import { TableColumn } from '../models/table-column';
import { TableConfig } from '../models/table-config';
import { SORT_DIRECTION } from '../models/table-sort';
import { TablePage } from '../models/table-page';

@Component({
  selector: "ag-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table-component.scss"],
})
export class TableComponent implements OnChanges {
  // @Input() columns: TableColumn[] = [];
  @Input() showPager: boolean = true;

  @Input() config: TableConfig = new TableConfig();
  @Output() configChange: EventEmitter<TableConfig>;
  @Output() search: EventEmitter<TableConfig>;

  @Input() isDebug: boolean = true;

  public activeColumns: string[] = [];
  public isGrouped: boolean = false;
  public showFooter: boolean = false;

  public dataSource: TableDataSource = new TableDataSource();

  private _dataLength: number = 0;
  public get dataLength(): number { return this._dataLength; }

  private data: any;
  private decimalpipe = new DecimalPipe('en-us');

  constructor() {
    this.search = new EventEmitter<null>();
    this.configChange = new EventEmitter<TableConfig>();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.columns) {
      if (changes.columns.currentValue !== changes.columns.previousValue) {
        this.updateColumns();
      }
    }
  }

  private updateColumns(): void {
    this.activeColumns = [];
    this.showFooter = false;

    this.config.columns.forEach(col => {
      if (col.visible) {
        this.activeColumns.push(col.name)

        if (col.calculate) {
          this.showFooter = true;
        }
      }
    });
  }

  doSearch() {
    this.dataSource.update(null);
    this.isGrouped = this.config.groupBy != null;
    this.search.emit(this.config);
  }

  update(data: any) {
    if (this.isDebug) {
      console.log("-- Table Update --", data);
    }

    this.data = data;
    this.config.page.recordCount = data.length;

    this.updateColumns();
    this.dataSource.update(data);
  }

  doSort(sortEvent: { active: string; direction: SORT_DIRECTION }) {
    if (this.isDebug) {
      console.log("-- Sort Changed --", sortEvent);
      console.log(`Direction: ${sortEvent.direction}`);
      console.log(`Field: ${sortEvent.active}`);
    }

    if (sortEvent.direction && sortEvent.active) {
      this.config.sortBy.direction = sortEvent.direction;
      this.config.sortBy.columnName = sortEvent.active;
    }
    else {
      this.config.sortBy = null;
    }

    this.doSearch();
  }

  pageChange(e: TablePage) {
    if (this.isDebug) {
      console.log("-- Page Changed --", e);
      console.log(`Page: ${e.page}`);
      console.log(`Take: ${e.take}`);
    }

    this.config.page.page = e.page;
    this.config.page.take = e.take;

    if (this.config.page.recordCount > 0) {
      this.doSearch();
    }
  }

  calculateTotal(col: TableColumn, key: any = null) {
    let result = 0;

    if (this.isGrouped) {
      if (this.data && key) {
        result = this.data[key]
          .map((t: any) => t[col.name])
          .reduce((acc, value) => acc + value, 0);
      }
    }
    else {
      if (this.data) {
        result = this.data
          .map((t: any) => t[col.name])
          .reduce((acc, value) => acc + value, 0);
      }
    }

    return this.decimalpipe.transform(result);
  }

  getColCount(): number {
    return this.activeColumns.length;
  }

}

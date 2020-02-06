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
export class TableComponent {
  @Input() showPager: boolean = true;

  @Input() config: TableConfig = new TableConfig();
  @Output() configChange: EventEmitter<TableConfig>;
  @Output() search: EventEmitter<TableConfig>;
  @Output() rowClick: EventEmitter<any>;

  @Input() isDebug: boolean = false;

  public activeColumns: string[] = [];
  public isGrouped: boolean = false;
  public showFooter: boolean = false;

  public dataSource: TableDataSource = new TableDataSource();

  private _dataLength: number = 0;
  public get dataLength(): number { return this._dataLength; }

  private data: any[];
  private decimalpipe = new DecimalPipe('en-us');

  constructor() {
    this.search = new EventEmitter<null>();
    this.configChange = new EventEmitter<TableConfig>();
    this.rowClick = new EventEmitter<any>();
  }

  private updateColumns(): void {
    var ac: string[] = [];
    this.showFooter = false;

    this.config.columns.forEach(col => {
      if (col.visible) {
        ac.push(col.name)

        if (col.calculate) {
          this.showFooter = true;
        }
      }
    });

    if (ac != this.activeColumns) {
      this.activeColumns = ac;
    }
  }

  doSearch() {
    this.isGrouped = this.config.groupBy != null;
    this.search.emit(this.config);
  }

  clickedRow(row: any) {
    this.rowClick.emit(row);
  }

  update(data: any[]) {
    this.data = data;

    if (this.isDebug) {
      console.log("-- Table Data --", this.data);
      console.log("-- Page Settings --", this.config.page);
    }

    if (this.data.length > this.config.page.take && data != null) {
      this.config.page.recordCount = data.length;

      if (this.isDebug) {
        console.log("-- [Data Stored In Memory] --");
      }

      var skipAmount = (this.config.page.page * this.config.page.take) - this.config.page.take;
      if (this.isDebug) {
        console.log("-- Skip Amount --", skipAmount);
      }

      var taken = this.data.slice(skipAmount, skipAmount + this.config.page.take);
      if (this.isDebug) {
        console.log("-- Taken --", taken);
      }

      this.dataSource.update(taken);
    }
    else {
      this.dataSource.update(this.data);
    }

    this.updateColumns();
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

  private groupMemoryData(data: any[], colName: string) {
    var grouped: { [key: string]: any[]; } = {};

    data.forEach(d => {
      var key: string = d[colName].toString();

      if (!(grouped[key])) {
        grouped[key] = [];
      }

      grouped[key].push(d);
    });

    console.log('Grouped Data', grouped);

    return grouped;
  }

}

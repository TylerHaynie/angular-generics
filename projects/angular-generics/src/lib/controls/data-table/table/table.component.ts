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
  styleUrls: ["./table-component.scss",
    '../../../../../styles/base.css'],
})
export class TableComponent {
  @Input() showPager: boolean = true;

  @Input() config: TableConfig = new TableConfig();
  @Output() configChange: EventEmitter<TableConfig>;

  @Output() search: EventEmitter<TableConfig>;
  @Output() rowSelect: EventEmitter<any>;

  @Input() isDebug: boolean = false;

  public activeColumns: string[] = [];
  public isGrouped: boolean = false;
  public showFooter: boolean = false;

  public dataSource: TableDataSource = new TableDataSource();

  private _dataLength: number = 0;
  public get dataLength(): number { return this._dataLength; }

  private data: any[];
  private decimalpipe = new DecimalPipe('en-us');

  selectedItem: any;

  constructor() {
    this.search = new EventEmitter<null>();
    this.configChange = new EventEmitter<TableConfig>();
    this.rowSelect = new EventEmitter<any>();
  }

  doSearch() {
    this.isGrouped = this.config.groupBy != null;
    this.configChange.emit(this.config);
    this.search.emit();
  }

  clickedRow(row: any) {
    if (this.isDebug) {
      console.log("-- selected row --", row);
    }

    this.selectedItem = row;
    this.rowSelect.emit(this.selectedItem);
  }

  update(data: any[]) {
    // setTimeout() will stall the table update
    // while children components run through their first lifecycle hooks
    setTimeout(() => {
      this.data = data;
      this.updateColumns();

      if (this.showPager && this.config && this.config.page) {
        if (this.isDebug) {
          console.log("-- Table Data --", this.data);
          console.log("-- Page Settings --", this.config.page);
        }

        this.config.page.recordCount = this.data.length;

        if ((data != null && this.config.page.take > 0) && (this.data.length > this.config.page.take)) {
          // if (this.data.length > this.config.page.take && data != null) {

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
      }
      else {
        this.dataSource.update(this.data);
      }
    }, 1)
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
    if (this.config) {
      if (this.config.page == null) { this.config.page = new TablePage(); }


      this.config.page.page = e.page;
      this.config.page.take = e.take;

      if (this.config.page.recordCount > 0) {
        this.doSearch();
      }
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

  private updateColumns(): void {
    if (this.isDebug) {
      console.log("-- Updating Columns --");
      console.log(`Columns`, this.config.columns);
    }

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
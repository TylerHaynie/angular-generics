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

@Component({
  selector: "ag-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table-component.scss"],
})
export class TableComponent implements OnChanges, OnInit {
  @Input() title: string;
  @Input() columns: TableColumn[] = [];
  @Input() allowExport: boolean = true;
  @Input() allowGroup: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() showPager: boolean = true;
  @Input() isDebug: boolean = true;

  @Output() export: EventEmitter<null>;
  @Output() search: EventEmitter<TableConfig>;

  public activeColumns: string[] = [];
  public dataSource: TableDataSource = new TableDataSource();
  public isLoading: boolean = false;
  public isGrouped: boolean = false;
  public showFooter: boolean = false;
  public tableConfig: TableConfig = new TableConfig();

  private _dataLength: number = 0;
  public get dataLength(): number { return this._dataLength; }

  private data: any;
  private decimalpipe = new DecimalPipe('en-us');

  constructor() {
    this.export = new EventEmitter<null>();
    this.search = new EventEmitter<null>();
  }

  ngOnInit() {

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

    this.columns.forEach(col => {
      if (col.visible) {
        this.activeColumns.push(col.name)

        if (col.calculate) {
          this.showFooter = true;
        }
      }
    });
  }

  doSearch() {
    this.isLoading = true;
    this.isGrouped ? this.dataSource.update(null) : this.dataSource.update(null);
    this.isGrouped = this.tableConfig.groupBy != null && this.tableConfig.groupBy.value != null;

    this.search.emit(this.tableConfig);
  }

  update(data: any[]) {
    if (this.isDebug) {
      console.log("-- Table Update --", data);
    }

    this.isLoading = false;
    this._dataLength = data.length;
    // this.tableConfig.data = data;

    this.updateColumns();
    this.dataSource.update(data);
  }

  doExport() {
    if (this.isDebug) {
      console.log("-- EXPORTING --");
    }

    this.export.emit();
  }

  doSort(sortEvent: { active: string; direction: SORT_DIRECTION }) {
    if (this.isDebug) {
      console.log("-- Sort Changed --", sortEvent);
      console.log(`Direction: ${sortEvent.direction}`);
      console.log(`Field: ${sortEvent.active}`);
    }

    if (sortEvent.direction && sortEvent.active) {
      this.tableConfig.sortBy.direction = sortEvent.direction;
      this.tableConfig.sortBy.columnName = sortEvent.active;
    }
    else {
      this.tableConfig.sortBy = null;
    }

    this.doSearch();
  }

  pageChanged(e: { pageNumber: number; takeAmount: number }) {
    if (this.isDebug) {
      console.log("-- Page Changed --", e);
      console.log(`Page: ${e.pageNumber}`);
      console.log(`Take: ${e.takeAmount}`);
    }

    this.tableConfig.page.page = e.pageNumber;
    this.tableConfig.page.take = e.takeAmount;

    if (this._dataLength > 0) {
      this.doSearch();
    }
  }

  calculateTotal(e: TableColumn, key: any = null) {
    let colName: string = e.name;
    let casedName = colName.charAt(0).toLowerCase() + colName.substring(1);
    let result = 0;

    if (this.isGrouped) {
      if (this.data && key) {
        result = this.data[key]
          .map((t: any[]) => t[casedName])
          .reduce((acc, value) => acc + value, 0);
      }
    }
    else {
      if ((this.data) && (this.data.length > 0)) {
        result = this.data
          .map((t: any[]) => t[casedName])
          .reduce((acc, value) => acc + value, 0);
      }
    }

    return this.decimalpipe.transform(result);
  }

  getColCount(): number {
    return this.activeColumns.length;
  }

}

import { Component, Input, EventEmitter, Output, ViewEncapsulation, HostListener, ElementRef } from "@angular/core";
import { DecimalPipe } from '@angular/common';
import { TableDataSource } from './table-data-source';
import { map, reduce } from 'rxjs/operators';
import { TableColumn } from '../models/table-column';
import { TableConfig } from '../models/table-config';
import { SORT_DIRECTION, TableSort } from '../models/table-sort';
import { TablePage } from '../models/table-page';

@Component({
  selector: "ag-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table-component.css",
    '../../../../styles/base.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent {
  @Input() showPager: boolean = true;

  @Input() config: TableConfig = new TableConfig();
  @Output() configChange: EventEmitter<TableConfig>;

  @Output() search: EventEmitter<TableConfig>;
  @Output() rowSelect: EventEmitter<any>;

  @Input() canEdit: boolean = false;
  @Input() isDebug: boolean = false;

  public isGrouped: boolean = false;
  public showFooter: boolean = true;

  public dataSource: TableDataSource;

  private _dataLength: number = 0;
  public get dataLength(): number { return this._dataLength; }

  private data: any[];
  private decimalpipe = new DecimalPipe('en-us');

  selectedRow: any;
  editing: boolean = false;
  hasEdits: boolean = false;

  private _updatedRows: any[] = [];
  public get rowUpdates(): any[] {
    return this._updatedRows;
  }

  constructor(private elemRef: ElementRef) {
    this.dataSource = new TableDataSource();
    this.search = new EventEmitter<null>();
    this.configChange = new EventEmitter<TableConfig>();
    this.rowSelect = new EventEmitter<any>();
  }

  @HostListener('document:click')
  clickout() {
    if (this.elemRef.nativeElement.contains(event.target)) {
      // this.text = "clicked inside";
    } else {
      this.editing = false;
    }
  }

  @HostListener('click')
  clickInside() {
    if (this.canEdit) {
      this.editing = true;
    }
  }

  doSearch() {
    this.configChange.emit(this.config);
    this.search.emit();
  }

  updateRow(row: any) {
    if (this.hasEdits) {
      var index = this._updatedRows.indexOf(this.selectedRow);

      if (this.isDebug) {
        console.log("Edited row exists at index: ", index);
      }

      if (index >= 0) {
        this._updatedRows[index] = this.selectedRow;
      }
      else {
        this._updatedRows.push(this.selectedRow);
      }
    }
  }

  clickedRow(row: any) {
    if (this.selectedRow == row && this.editing) { return; }

    this.selectedRow = row;

    if (this.isDebug) {
      console.log("-- Selected Row --", this.selectedRow);
      console.log("-- Updated Rows --", this._updatedRows);
    }

    this.rowSelect.emit(this.selectedRow);
  }

  // TODO: refactor this mess
  update(data: any[]) {
    this._updatedRows = [];
    this.hasEdits = false;

    // setTimeout() will stall the table update
    // while children components run through their first lifecycle hooks
    setTimeout(() => {
      this.isGrouped = this.config.groupBy != null;

      this.data = data;
      this.updateColumns();

      if (this.showPager && this.config && this.config.page) {
        if (this.isDebug) {
          console.log("-- Table Data --", this.data);
          console.log("-- Page Settings --", this.config.page);
        }

        this.config.page.recordCount = this.data.length;

        if ((data != null && this.config.page.take > 0) && (this.data.length > this.config.page.take)) {
          if (this.isDebug) {
            console.log("-- [Data Stored In Memory] --");
          }

          this.applySort(this.data, this.config.sortBy);

          var skipAmount = (this.config.page.page * this.config.page.take) - this.config.page.take;
          if (this.isDebug) {
            console.log(`-- Skip Amount: ${skipAmount}`);
          }

          var taken = this.data.slice(skipAmount, skipAmount + this.config.page.take);
          if (this.isDebug) {
            console.log(`-- Taken ---`, taken);
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

  setSort(col: TableColumn) {
    if (col != null) {
      if (this.isDebug) {
        console.log(`--- Sorting Column ---`, this.config.sortBy);
      }

      var dir = this.config.sortBy.direction;
      this.config.sortBy.direction = dir == SORT_DIRECTION.ASC ? SORT_DIRECTION.DSC : SORT_DIRECTION.ASC;
      this.config.sortBy.columnName = col.name;

      if (this.isDebug) {
        console.log(`--- Sort Direction: ${this.config.sortBy.direction}`);
        console.log(`--- Sort Field: ${this.config.sortBy.columnName}`);
      }

      this.doSearch();
    }
  }

  applySort(data: any[], sort: TableSort): any[] {
    if (this.config.sortBy && this.config.sortBy.columnName) {
      if (this.isDebug) {
        console.log(`--- Applying Sort ---`, this.config.sortBy);
      }

      return data.sort((n1, n2) => {
        if (n1[sort.columnName] > n2[sort.columnName]) {
          return 1;
        }
        if (n1[sort.columnName] < n2[sort.columnName]) {
          return -1;
        }

        return 0;
      });
    }
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

      }
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

  private updateColumns(): void {
    this.showFooter = false;

    this.config.columns.forEach(col => {
      if (col.visible && col.calculate) {
        this.showFooter = true;
      }
    });
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

    if (this.isDebug) {
      console.log('Grouped Data', grouped);
    }

    return grouped;
  }

}
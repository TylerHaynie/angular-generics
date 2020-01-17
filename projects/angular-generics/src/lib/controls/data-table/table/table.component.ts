import {
  Component, Input, OnChanges, SimpleChanges,
  ViewEncapsulation, Output, EventEmitter
} from "@angular/core";
import { TableColumn } from "../models/table-column";
import { TableSort } from '../models/table-sort';
import { TablePage } from '../models/table-page';
import { DataTable } from '../models/data-table';
import { map, reduce } from 'rxjs/operators';
import { TableDataSource } from './table-data-source';

@Component({
  selector: "ag-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table-component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnChanges {
  @Input() dataTable: DataTable;

  @Input() showHeader: boolean = true;
  @Input() title: string;

  @Input() showPager: boolean = true;
  @Input() showFooter: boolean = false;
  @Input() grouped: boolean = false;

  @Input() allowGroup: boolean = true;
  @Input() allowExport: boolean = true;

  @Output() sortChange: EventEmitter<TableSort>;
  @Output() pageChange: EventEmitter<TablePage>;
  @Output() groupChange: EventEmitter<TableColumn>;
  @Output() exported: EventEmitter<DataTable>;

  @Input() loading: boolean = false;
  @Input() debug: boolean = true;

  protected activeColumns: TableColumn[] = [];
  protected dataSource: TableDataSource = new TableDataSource();

  constructor() {
    this.sortChange = new EventEmitter<TableSort>();
    this.pageChange = new EventEmitter<TablePage>();
    this.groupChange = new EventEmitter<TableColumn>();
    this.exported = new EventEmitter<DataTable>();
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

    if (this.dataTable && this.dataTable.columns) {
      let needsFooter = false;
      this.dataTable.columns.forEach(col => {
        if (col.visible) {
          this.activeColumns.push(col)

          if (col.calculate) {
            needsFooter = true;
          }
        }
      });
      this.showFooter = needsFooter && !this.showFooter;
    }
  }

  update() {
    this.dataSource.update(this.dataTable.data);
  }

  protected sortChanged(e: TableSort) {
    if (this.debug) {
      console.log("-- Sort Changed --", e);
    }

    this.dataTable.sortBy = e;
    this.sortChange.emit(this.dataTable.sortBy);
  }

  protected pageChanged(e: TablePage) {
    if (this.debug) {
      console.log("-- Page Changed --", e);
    }

    // this.dataTable.page = e;
    this.pageChange.emit(this.dataTable.page);
  }

  protected groupChanged(g: TableColumn) {
    if (this.debug) {
      console.log("-- Group Changed --", g);
    }

    // this.dataTable.groupBy = g;
    this.groupChange.emit(this.dataTable.groupBy);
  }

  protected doExport() {
    this.exported.emit(this.dataTable);
  }

  protected calculateTotal(e: TableColumn, key: any = null): number {
    let colName: string = e.name;
    let casedName = colName.charAt(0).toLowerCase() + colName.substring(1);
    let result = 0;

    if (this.grouped) {
      if (this.dataTable.data && key) {
        result = this.dataTable.data[key]
          .map((t: any[]) => t[casedName])
          .reduce((acc, value) => acc + value, 0);
      }
    }
    else {
      if ((this.dataTable.data) && (this.dataTable.data.length > 0)) {
        result = this.dataTable.data
          .map((t: any[]) => t[casedName])
          .reduce((acc, value) => acc + value, 0);
      }
    }

    return result;
  }

}

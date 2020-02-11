import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { TablePage } from '../models/table-page';

@Component({
  selector: 'ag-table-pager',
  templateUrl: './table-pager.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TablePagerComponent implements OnInit {
  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  @Input() sizeOptions: number[] = [10, 25, 50, 100, 250, 500, 1000];

  @Input() page: TablePage;
  @Output() pageChange: EventEmitter<TablePage>;

  constructor() {
    this.pageChange = new EventEmitter<TablePage>();
  }

  ngOnInit() {
    // setTimeout(() => {
    //   if (this.paginator) {
    //     this.page.page = 1;
    //     this.page.take = this.paginator.pageSize;
    //     this.page.recordCount = 0;
    //   }
    // }, 1);
  }

  changePage() {
    if (this.paginator) {
    this.page.page = this.paginator.pageIndex + 1;
    this.page.take = this.paginator.pageSize;

    this.pageChange.emit(this.page);
    }
  }
}

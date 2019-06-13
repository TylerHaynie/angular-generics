import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';

export class PageChange {
  pageNumber: number;
  takeAmount: number;
}

@Component({
  selector: 'generic-table-pager',
  templateUrl: './generic-table-pager.component.html'
})
export class GenericTablePagerComponent implements OnInit {
  @Input() showPager: boolean = true;
  @Input() pageNumber: number = 1;
  @Input() takeAmount: number = 5;
  @Input() recordCount: number = 0;
  @Input() pageSizeOptions: number[] = [5, 25, 50, 100, 250, 500, 1000];
  @Output() pageChanged: EventEmitter<PageChange>;

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;

  constructor() {
    this.pageChanged = new EventEmitter<PageChange>();
  }

  ngOnInit() {
    if (this.showPager && this.paginator) {
      this.pageNumber = 1;
      this.takeAmount = this.paginator.pageSize;
    }
  }

  changePage(pEvent: PageEvent) {
    this.pageNumber = this.paginator.pageIndex + 1;
    this.takeAmount = this.paginator.pageSize;

    this.pageChanged.emit({ pageNumber: this.pageNumber, takeAmount: this.takeAmount });
  }
}

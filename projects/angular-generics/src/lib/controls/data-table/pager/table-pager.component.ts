import { Component, Input, Output, EventEmitter, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { TablePage } from '../models/table-page';

@Component({
  selector: 'ag-table-pager',
  templateUrl: './table-pager.component.html',
  styleUrls: ['../../../../../styles/base.css'],
  encapsulation: ViewEncapsulation.None
})
export class TablePagerComponent {
  @Input() sizeOptions: number[] = [10, 25, 50, 100, 250, 500, 1000];

  @Input() page: TablePage;
  @Output() pageChange: EventEmitter<TablePage>;

  constructor() {
    this.pageChange = new EventEmitter<TablePage>();
  }

  sizeChanged(size: any) {
    console.log('page size changed', size);
    this.page.take = size;
    this.changePage("first");
  }

  changePage(step: 'first' | 'back' | 'next' | 'last') {
    switch (step) {
      case 'first':
        this.page.page = 1;
        break;
      case 'last':
        this.page.page = Math.trunc(this.page.recordCount / this.page.take);
        break;
      case 'next':
        this.page.page += 1;
        break;
      case 'back':
        this.page.page -= 1;
    }

    this.pageChange.emit(this.page);
  }

  getPageInfo(): string {
    var pn = ((this.page.page - 1) * this.page.take) + 1;
    var take = (this.page.page * this.page.take) > this.page.recordCount ? this.page.recordCount : this.page.page * this.page.take;
    var total = this.page.recordCount;

    var info: string = `${pn} - ${take} of ${total}`;

    return info;
  }
}

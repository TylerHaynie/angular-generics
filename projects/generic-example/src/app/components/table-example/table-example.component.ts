import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent implements AfterViewInit {
  // @ViewChild('dataTable', { static: false }) dataTable: GenericTableComponent<TestTable>;

  // testRequest: GenericSearchRequest = new GenericSearchRequest();
  // columns: GenericTableColumn[] = [];

  constructor() {
    // this.testRequest.endpoint = `https://jsonplaceholder.typicode.com/todos`;
    // this.testRequest.method = "get";
    // this.buildTableColumns();
  }

  ngAfterViewInit() {
    // this.dataTable.search();
  }

  // buildTableColumns() {
  //   this.columns = [
  //     new GenericTableColumn({
  //       id: 'userId',
  //       display: 'User Id',
  //       dataType: 'number',
  //       cell: (element: TestTable) => `${element.userId}`,
  //     }),
  //     new GenericTableColumn({
  //       id: 'id',
  //       display: 'ID',
  //       dataType: 'number',
  //       cell: (element: TestTable) => `${element.id}`,
  //     }),

  //     new GenericTableColumn({
  //       id: 'completed',
  //       display: 'Finished',
  //       dataType: 'check',
  //       cell: (element: TestTable) => `${element.completed}`,
  //     }),
  //     new GenericTableColumn({
  //       id: 'title',
  //       display: 'Title',
  //       dataType: 'string',
  //       cell: (element: TestTable) => `${element.title}`,
  //     }),
  //   ];
  // }

  // filterSearch(e: { [field: string]: string; }) {
  //   this.testRequest.filter = e;
  //   this.dataTable.search();
  // }

  // pageChanged(e: { pageNumber: number, takeAmount: number }) {
  //   this.testRequest.page = e.pageNumber;
  //   this.testRequest.take = e.takeAmount;

  //   this.dataTable.search();
  // }

}

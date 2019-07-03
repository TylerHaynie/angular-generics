import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GenericTableColumn, GenericSearchRequest, GenericTableComponent } from 'angular-generics';

export class TestTable {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('dataTable', { static: false }) dataTable: GenericTableComponent<TestTable>;

  inputbinding1: string;
  inputbinding2: string;
  inputbinding3: string;

  showModal: boolean = false;

  rangeValue: { from: any, to: any };

  checkBinding1: boolean = false;

  dropdownSource: string = `https://jsonplaceholder.typicode.com/todos`;
  selectedDropdownId: number = 0;

  testRequest: GenericSearchRequest = new GenericSearchRequest();
  columns: GenericTableColumn[] = [];


  // angular needs an array of 'something' to loop over
  _gridColumns: number[] = [];

  constructor() {
    this.testRequest.endpoint = `https://jsonplaceholder.typicode.com/todos`;
    this.testRequest.method = "get";
    this.buildTableColumns();
  }

  ngOnInit() {
    this._gridColumns = Array.from(Array(4), (x, i) => i);
  }

  ngAfterViewInit() {
    // this.dataTable.search();
  }

  buildTableColumns() {
    this.columns = [
      new GenericTableColumn({
        id: 'userId',
        display: 'User Id',
        dataType: 'number',
        cell: (element: TestTable) => `${element.userId}`,
      }),
      new GenericTableColumn({
        id: 'id',
        display: 'ID',
        dataType: 'number',
        cell: (element: TestTable) => `${element.id}`,
      }),

      new GenericTableColumn({
        id: 'completed',
        display: 'Finished',
        dataType: 'boolean',
        cell: (element: TestTable) => `${element.completed}`,
      }),
      new GenericTableColumn({
        id: 'title',
        display: 'Title',
        dataType: 'string',
        cell: (element: TestTable) => `${element.title}`,
      }),
    ];
  }

  buttonClicked() {
    console.log('ButtonClicked');
  }
  // events
  dropdownChanged(e) {
    console.log(e);
  }

}

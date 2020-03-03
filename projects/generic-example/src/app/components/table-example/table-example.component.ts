import { Component, ViewChild, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { TableComponent, TableColumn, TableConfig, ColumnFilter } from 'angular-generics';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('asyncTable', { static: false }) asyncTable: TableComponent;
  @ViewChild('staticTable', { static: false }) staticTable: TableComponent;

  tableSource: string = `https://jsonplaceholder.typicode.com/todos`;
  asyncConfig: TableConfig = new TableConfig();
  staticConfig: TableConfig = new TableConfig();

  selectedAsyncRow: any;
  selectedStaticRow: any;

  staticRowOutput: string;
  asyncRowOutput: string;

  showFilter: boolean = false;

  staticData: { id: number, name: string, rank: string }[] = [
    { id: 1, name: 'Tom', rank: '12A' },
    { id: 2, name: 'Steve', rank: '12A' },
    { id: 3, name: 'Roger', rank: '12A' },
    { id: 4, name: 'Tasha', rank: '12A' },
    { id: 5, name: 'Mark', rank: '12A' },
    { id: 6, name: 'Brenda', rank: '12A' },
    { id: 7, name: 'Tonya', rank: '12A' },
  ];

  constructor(private http: HttpClient) {
    this.asyncConfig.columns = this.setAsyncColumns();
    this.staticConfig.columns = this.setStaticColumns();
  }

  ngOnInit() {
    this.updateAsyncData();
  }

  // static tables have to exist before updating
  ngAfterViewInit() {
    this.updateStaticData();
  }

  updateAsyncData() {
    this.http.get(this.tableSource)
      .toPromise()
      .then((d: any[]) => {
        this.asyncTable.update(d);
      });
  }

  updateStaticData() {
    this.staticTable.update(this.staticData);
  }

  setAsyncColumns(): TableColumn[] {
    return [
      new TableColumn({
        name: "userId",
        calculate: false,
        visible: true,
        headerValue: (element: any) => 'User',
        cellValue: (element: any) => this.getValue(element.userId)
      }),
      new TableColumn({
        name: "id",
        calculate: false,
        visible: true,
        headerValue: (element: any) => 'ID',
        cellValue: (element: any) => this.getValue(element.id)
      }),
      new TableColumn({
        name: "title",
        calculate: false,
        visible: true,
        headerValue: (element: any) => 'Title',
        cellValue: (element: any) => this.getValue(element.title)
      }),
      new TableColumn({
        name: "completed",
        calculate: false,
        visible: true,
        headerValue: (element: any) => 'Complete',
        cellValue: (element: any) => this.getValue(element.completed)
      }),
    ];
  }

  setStaticColumns(): TableColumn[] {
    return [
      new TableColumn({
        name: "id",
        calculate: true,
        visible: true,
        headerValue: (element: any) => 'ID',
        cellValue: (element: any) => this.getValue(element.id)
      }),
      new TableColumn({
        name: "name",
        calculate: false,
        visible: true,
        headerValue: (element: any) => 'Name',
        cellValue: (element: any) => this.getValue(element.name)
      }),
      new TableColumn({
        name: "rank",
        calculate: false,
        visible: true,
        headerValue: (element: any) => 'Rank',
        cellValue: (element: any) => this.getValue(element.rank)
      }),
    ];
  }

  doAsyncSearch() {
    console.log(this.asyncConfig);
  }

  doStraticSearch() {
    console.log(this.staticConfig);
  }

  asyncRowSelected(rowData: any) {
    this.selectedAsyncRow = rowData;
    this.asyncRowOutput = JSON.stringify(rowData, null, 2);
  }

  staticRowSelected(rowData: any) {
    this.selectedStaticRow = rowData;
    this.staticRowOutput = JSON.stringify(this.selectedStaticRow);
  }

  private getValue(elemValue: any): string {
    if (elemValue == null || elemValue == undefined) {
      return '';
    }
    return `${elemValue}`;
  }
}

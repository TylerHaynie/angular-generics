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

  staticData: { id: number, name: string, rank: string, paid: number }[] = [
    { id: 1, name: 'Tom', rank: '12A', paid: 5412 },
    { id: 2, name: 'Steve', rank: '12A', paid: 885 },
    { id: 3, name: 'Roger', rank: '12A', paid: 2245 },
    { id: 4, name: 'Tasha', rank: '12A', paid: 951 },
    { id: 5, name: 'Mark', rank: '12A', paid: 3485 },
    { id: 6, name: 'Brenda', rank: '12A', paid: 12045 },
    { id: 7, name: 'Tonya', rank: '12A', paid: 1850 },
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
        headerValue: (element: any) => 'User',
        cellValue: (element: any) => this.getValue(element.userId)
      }),
      new TableColumn({
        name: "id",
        headerValue: (element: any) => 'ID',
        cellValue: (element: any) => this.getValue(element.id)
      }),
      new TableColumn({
        name: "title",
        headerValue: (element: any) => 'Title',
        cellValue: (element: any) => this.getValue(element.title)
      }),
      new TableColumn({
        name: "completed",
        headerValue: (element: any) => 'Complete',
        cellValue: (element: any) => this.getValue(element.completed)
      }),
    ];
  }

  setStaticColumns(): TableColumn[] {
    return [
      new TableColumn({
        name: "id",
        filterable: false,
        headerValue: (element: any) => 'ID',
        cellValue: (element: any) => this.getValue(element.id)
      }),
      new TableColumn({
        name: "name",
        headerValue: (element: any) => 'Name',
        cellValue: (element: any) => this.getValue(element.name)
      }),
      new TableColumn({
        name: "rank",
        headerValue: (element: any) => 'Rank',
        cellValue: (element: any) => this.getValue(element.rank)
      }),
      new TableColumn({
        name: "paid",
        calculate: true,
        filterable: false,
        type: 'number',
        headerValue: (element: any) => '$ Paid',
        cellValue: (element: any) => this.getValue(element.paid)
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

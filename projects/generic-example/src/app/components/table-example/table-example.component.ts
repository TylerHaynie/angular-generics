import { Component, ViewChild, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { TableComponent, TableColumn, TableConfig, ColumnFilter } from 'angular-generics';
import { HttpClient } from '@angular/common/http';

class SData {
  id: number;
  name: string;
  rank: string;
  paid: number;
}

class AData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

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

  staticUpdateOutput: string;
  asyncUpdateOutput: string;

  showFilter: boolean = false;

  staticData: SData[] = [
    { id: 1, name: 'Tom', rank: '12A', paid: 5412, },
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
      .then((d: AData[]) => {
        this.asyncTable.update(d);
      });
  }

  updateStaticData() {
    this.staticTable.update(this.staticData);
  }

  setAsyncColumns(): TableColumn[] {
    return [
      new TableColumn({
        name: "id",
        canEdit: false,
        getHeader: (element: AData) => 'ID',
        getCell: (element: AData) => element.id,
        dataType: "number"
      }),
      new TableColumn({
        name: "userId",
        getHeader: (element: AData) => 'User',
        getCell: (element: AData) => element.userId,
        dataType: "number"
      }),
      new TableColumn({
        name: "title",
        getHeader: (element: AData) => 'Title',
        getCell: (element: AData) => element.title
      }),
      new TableColumn({
        name: "completed",
        getHeader: (element: AData) => 'Complete',
        getCell: (element: AData) => element.completed,
        dataType: "bool"
      }),
    ];
  }

  getAsyncEdits() {
    if (this.asyncTable && this.asyncTable.rowUpdates.length > 0) {
      return JSON.stringify(this.asyncTable.rowUpdates, null, 5);
    }
  }

  getStaticEdits() {
    if (this.staticTable && this.staticTable.rowUpdates.length > 0) {
      return JSON.stringify(this.staticTable.rowUpdates, null, 5);
    }
  }

  setStaticColumns(): TableColumn[] {
    return [
      new TableColumn({
        name: "id",
        dataType: 'number',
        canFilter: false,
        canEdit: false,
        getHeader: (element: any) => 'ID',
        getCell: (element: any) => this.getValue(element.id)
      }),
      new TableColumn({
        name: "name",
        dataType: 'string',
        getHeader: (element: any) => 'Name',
        getCell: (element: any) => this.getValue(element.name)
      }),
      new TableColumn({
        name: "rank",
        dataType: 'string',
        getHeader: (element: any) => 'Rank',
        getCell: (element: any) => this.getValue(element.rank)
      }),
      new TableColumn({
        name: "paid",
        calculate: true,
        canFilter: false,
        dataType: 'number',
        getHeader: (element: any) => '$ Paid',
        getCell: (element: any) => this.getValue(element.paid)
      }),
    ];
  }

  doAsyncSearch() {
    console.log('Table config updated with search params', this.asyncConfig);
    //TODO: Server request with new config (contains search params)
  }

  doStaticSearch() {
    console.log('Table config updated with search params', this.staticConfig);
    //TODO: filter in-memory data with new config (contains search params)
  }

  asyncRowSelected(rowData: any) {
    this.selectedAsyncRow = rowData;
    this.asyncRowOutput = JSON.stringify(rowData, null, 2); // just for display purposes
  }

  staticRowSelected(rowData: any) {
    this.selectedStaticRow = rowData;
    this.staticRowOutput = JSON.stringify(this.selectedStaticRow); // just for display purposes
  }

  private getValue(elemValue: any): any {
    if (elemValue == null || elemValue == undefined) {
      return '';
    }
    return elemValue;
  }
}

import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn, TableConfig } from 'angular-generics';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent implements OnInit {
  @ViewChild('dataTable', { static: false }) exampleTable: TableComponent;

  tableSource: string = `https://jsonplaceholder.typicode.com/todos`;
  tableColumns: TableColumn[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.tableColumns = this.setTableColumns();
    this.updateTable(null);
  }

  updateTable(tc: TableConfig) {
    this.http.get(this.tableSource)
      .toPromise()
      .then((d: any[]) => {
        this.exampleTable.update(d);
      });
  }

  setTableColumns(): TableColumn[] {
    return [
      new TableColumn({
        name: "userId",
        display: "User ID",
        allowFilter: false,
        calculate: false,
        visible: true,
        cellValue: (element: any) => this.getValue(element.userId)
      }),
      new TableColumn({
        name: "id",
        display: "ID",
        allowFilter: false,
        calculate: false,
        visible: true,
        cellValue: (element: any) => this.getValue(element.id)
      }),
      new TableColumn({
        name: "title",
        display: "Title",
        allowFilter: false,
        calculate: false,
        visible: true,
        cellValue: (element: any) => this.getValue(element.title)
      }),
      new TableColumn({
        name: "completed",
        display: "Complete",
        allowFilter: false,
        calculate: false,
        visible: true,
        cellValue: (element: any) => this.getValue(element.completed)
      }),
    ];
  }

  private getValue(elemValue: any): string {
    if (elemValue == null || elemValue == undefined) {
      return '';
    }
    return `${elemValue}`;
  }

}

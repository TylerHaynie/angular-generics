import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn, TableConfig, ColumnFilter } from 'angular-generics';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent implements OnInit {
  @ViewChild('dataTable', { static: false }) exampleTable: TableComponent;

  tableSource: string = `https://jsonplaceholder.typicode.com/todos`;
  tableConfig: TableConfig = new TableConfig();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.tableConfig.columns = this.setTableColumns();
    // this.tableConfig.groupBy = this.tableConfig.columns[0];

    this.updateTable(null);
  }

  updateTable(tc: TableConfig) {
    this.http.get(this.tableSource)
      .toPromise()
      .then((d: any[]) => {
        if (this.tableConfig.groupBy) {
          var gd = this.groupDataResult(d, this.tableConfig.groupBy.name);
          this.exampleTable.update(gd);
        }
        else {
          this.exampleTable.update(d);
        }
      });
  }

  setTableColumns(): TableColumn[] {
    return [
      new TableColumn({
        name: "userId",
        calculate: true,
        visible: true,
        headerValue: (element: any) => 'User ID',
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

  private getValue(elemValue: any): string {
    if (elemValue == null || elemValue == undefined) {
      return '';
    }
    return `${elemValue}`;
  }

  private groupDataResult(data: any[], colName: string) {
    var grouped: { [key: string]: any[]; } = {};

    data.forEach(d => {
      var key: string = d[colName].toString();

      if (!(grouped[key])) {
        grouped[key] = [];
      }

      grouped[key].push(d);
    });

    console.log('Grouped Data', grouped);

    return grouped;
  }
}

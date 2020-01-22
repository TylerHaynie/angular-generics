import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent{
  // @ViewChild('detailTable', { static: false }) detailTable: TableComponent;
  // @ViewChild('dataTable', { static: false }) dataTable: TableComponent;

  // staticReport: ReportBase;

  // constructor(private apiService: ApiService) {
  //   this.staticReport = new ClaimImportReport();
  // }

  // search(params: SearchParam[]) {
  //   this.staticReport.reportRequest.detailRequest.filters = params;
  //   this.detailTable.search();

  //   this.staticReport.reportRequest.dataRequest.filters = params;
  //   this.dataTable.search();
  // }

  // export() {
  //   this.apiService
  //     .post(environment.exportBase, this.staticReport.reportRequest, { responseType: "arraybuffer" })
  //     .then((res: any) => {
  //       var newBlob = new Blob([res], { type: "application/octet-stream" });
  //       saveAs(newBlob, "test.pdf");
  //     });
  // }
}

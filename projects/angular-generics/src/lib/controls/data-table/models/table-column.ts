export class TableColumn {
  name: string;
  display: string;
  reference: string;

  allowFilter: boolean = true;
  filterValue: any;

  visible: boolean = true;
  allowSort: boolean = true;
  calculate: boolean = false;

  cellValue: (element: any) => any;
  footerValue: (element: any) => any;
}

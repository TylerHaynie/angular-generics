export class TableColumn {
  name: string;
  display: string;

  allowFilter: boolean = true;
  filterValue: any;

  visible: boolean = true;
  allowSort: boolean = true;
  calculate: boolean = false;

  cellValue: (element: any) => any;
  footerValue: (element: any) => any;

  meta: any;

  constructor(column: Partial<TableColumn>) {
    Object.assign(this, column);
  }
}

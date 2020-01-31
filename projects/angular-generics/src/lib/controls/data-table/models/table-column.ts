export class TableColumn {
  name: string;
  visible: boolean = true;
  calculate: boolean = false;
  alignHeader: 'left' | 'center' | 'right' = 'left';
  alignColumn: 'left' | 'center' | 'right' = 'left';

  headerValue: (element: any) => any;
  cellValue: (element: any) => any;
  footerValue: (element: any) => any;

  meta: any;

  constructor(column: Partial<TableColumn>) {
    Object.assign(this, column);
  }
}

import { ColumnFilter } from './column-filter';

export class TableColumn {
  name: string;

  visible: boolean = true;
  calculate: boolean = false;

  alignHeader: 'left' | 'center' | 'right' = 'left';
  alignColumn: 'left' | 'center' | 'right' = 'left';

  headerValue: (element: any) => any;
  cellValue: (element: any) => any;
  footerValue: (element: any) => any;

  filterable: boolean = true;
  filter: ColumnFilter = new ColumnFilter();
  meta: any;

  constructor(col?: Partial<TableColumn>) {
    Object.assign(this, col);
  }

}

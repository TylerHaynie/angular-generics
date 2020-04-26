import { ColumnFilter } from './column-filter';

export class TableColumn {
  name: string;

  visible: boolean = true;
  calculate: boolean = false;

  alignHeader: 'left' | 'center' | 'right' = 'left';
  alignColumn: 'left' | 'center' | 'right' = 'left';

  getHeader: (element: any) => any;
  getCell: (element: any) => any;
  getFooter: (element: any) => any;

  canFilter: boolean = true;
  canEdit: boolean = true;

  filter: ColumnFilter = new ColumnFilter();
  dataType: 'string' | 'number' | 'date' | 'option' | 'bool' = 'string';

  // used to carry any custom data that might be needed
  meta: any;

  constructor(col?: Partial<TableColumn>) {
    Object.assign(this, col);
  }

}

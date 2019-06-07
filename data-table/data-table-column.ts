export class DataTableColumn {
  id: string;
  display: string;
  reference: string;
  cell: (element: any) => any;
  footer: (element: any) => any;
  allowSort: boolean = true;
  allowFilter: boolean = true;
  dataType: 'string' | 'number' | 'date' | 'list' = 'string';
  list?: DataList = null;

  public constructor(init?: Partial<DataTableColumn>) {
    Object.assign(this, init);
  }
}

export class DataList {
  source: string = null;
  display: string = null;
  value: string = null;

  public constructor(init: DataList) {
    Object.assign(this, init);
  }
}

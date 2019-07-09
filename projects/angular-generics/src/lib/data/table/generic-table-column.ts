export class GenericTableColumn {
  id: string;
  display: string;
  reference: string;
  cell: (element: any) => any;
  footer: (element: any) => any;
  allowSort: boolean = true;
  allowFilter: boolean = true;
  dataType: 'string' | 'number' | 'check' | 'date' | 'select' = 'string';
  // list?: DataList = null;

  public constructor(init?: Partial<GenericTableColumn>) {
    Object.assign(this, init);
  }
}

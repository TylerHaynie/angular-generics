export class ColumnFilter {
  name: string;
  value: any;

  constructor(filter: Partial<ColumnFilter>) {
    Object.assign(this, filter);
  }
}

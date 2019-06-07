import { DataTableColumn } from './data-table-column';
export interface IDataTable {
  getColumns(): DataTableColumn[];
}

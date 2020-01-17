import { TablePage } from './table-page';
import { TableColumn } from './table-column';
import { TableSort } from './table-sort';
import { ColumnFilter } from './column-filter';

export class DataTable {
  data: any;
  columns: TableColumn[] = [];
  filters: ColumnFilter[] = [];
  page: TablePage = new TablePage();
  sortBy: TableSort;
  groupBy: TableColumn;
}

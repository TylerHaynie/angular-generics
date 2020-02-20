import { TablePage } from './table-page';
import { TableColumn } from './table-column';
import { TableSort } from './table-sort';
import { ColumnFilter } from './column-filter';

export class TableConfig {
  columns: TableColumn[] = [];
  page: TablePage = new TablePage();
  sortBy: TableSort;
  groupBy: TableColumn;
}

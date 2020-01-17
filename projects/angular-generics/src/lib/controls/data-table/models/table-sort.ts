import { TableColumn } from './table-column';

export enum SORT_DIRECTION {
  ASC = 'asc',
  DSC = 'dsc'
}

export class TableSort {
  column: TableColumn;
  direction: SORT_DIRECTION = SORT_DIRECTION.DSC;
}
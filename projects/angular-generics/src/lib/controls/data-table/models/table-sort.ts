export enum SORT_DIRECTION {
  ASC = 'asc',
  DSC = 'dsc'
}

export class TableSort {
  columnName: string;
  direction: SORT_DIRECTION = SORT_DIRECTION.DSC;
}
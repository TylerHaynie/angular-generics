import { GenericTableColumn } from './generic-table-column';

export interface IGenericTableSettings {
  getColumns(): GenericTableColumn[];
}

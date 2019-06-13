import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericSearchRequest } from '../../services/generic-search';
import { GenericDataSource } from '../datasource/generic-data-source';
import { GenericTableColumn } from './generic-table-column';
import { GenericTableComponent, CustomAction } from './generic-table.component';
import { MatTableModule, MatSortModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenericTableComponent,
    // GenericTableColumn,
    // CustomAction
  ],
  imports: [
    CommonModule,
    FormsModule,
    // GenericSearchRequest,
    // GenericDataSource,
    // GenericTableColumn,
    MatTableModule,
    MatSortModule,
    MatIconModule,
  ],
  exports: [
    GenericTableComponent,
    // GenericTableColumn,
    // CustomAction
  ]
})

export class GenericTableModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table.component';
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

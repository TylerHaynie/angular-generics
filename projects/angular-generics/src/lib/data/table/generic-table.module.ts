import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericTableComponent } from './generic-table.component';
import { MatTableModule, MatSortModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { GenericDataSourceModule } from '../datasource/generic-data-source.module';

@NgModule({
  declarations: [
    GenericTableComponent,
  ],
  imports: [
    CommonModule,
    GenericDataSourceModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
  ],
  exports: [
    GenericTableComponent,
  ]
})

export class GenericTableModule { }

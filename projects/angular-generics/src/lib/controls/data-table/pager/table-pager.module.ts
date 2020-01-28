import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePagerComponent } from './table-pager.component';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    TablePagerComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
  ],
  exports: [
    TablePagerComponent
  ]
})

export class GenericPagerModule { }

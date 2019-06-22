import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material';
import { GenericTablePagerComponent, PageChange } from './generic-table-pager.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GenericTablePagerComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    FormsModule
  ],
  exports: [
    GenericTablePagerComponent,
  ]
})

export class GenericTablePagerModule { }

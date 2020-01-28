import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { GenericSelectModule } from '../../select/select.module';
import { GenericPagerModule } from '../pager/table-pager.module';
import { MatExpansionModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    GenericSelectModule,
    GenericPagerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTableModule,
    GenericPagerModule
  ],
  exports: [
    TableComponent
  ]
})

export class GenericTableModule { }

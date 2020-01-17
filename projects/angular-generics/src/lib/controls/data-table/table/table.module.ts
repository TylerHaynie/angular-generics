import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { GenericSelectModule } from '../../select/select.module';
import { GenericPagerModule } from '../pager/table-pager.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    GenericSelectModule,
    GenericPagerModule
  ],
  exports: [
    TableComponent
  ]
})

export class GenericTableModule { }

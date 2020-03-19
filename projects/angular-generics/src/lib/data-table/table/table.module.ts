import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { GenericSelectModule } from '../../controls/select/select.module';
import { GenericPagerModule } from '../pager/table-pager.module';
import { GenericContentModule } from '../../containers/content/content.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericSelectModule,
    GenericPagerModule,
    GenericContentModule
  ],
  exports: [
    TableComponent
  ]
})

export class GenericTableModule { }

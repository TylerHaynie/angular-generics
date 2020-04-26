import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { GenericSelectModule } from '../../controls/select/select.module';
import { GenericPagerModule } from '../pager/table-pager.module';
import { GenericContentModule } from '../../containers/content/content.module';
import { GenericTextModule } from '../../controls/text/text.module';
import { GenericCheckModule } from '../../controls/check/check.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericSelectModule,
    GenericPagerModule,
    GenericContentModule,
    GenericTextModule,
    GenericSelectModule,
    GenericCheckModule,
  ],
  exports: [
    TableComponent
  ]
})

export class GenericTableModule { }

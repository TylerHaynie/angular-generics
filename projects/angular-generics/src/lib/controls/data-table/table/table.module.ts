import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table.component';
import { GenericSelectModule } from '../../select/select.module';
import { GenericPagerModule } from '../pager/table-pager.module';
import { MatExpansionModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { GenericContentModule } from '../../../containers/content/content.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTableModule,
    GenericSelectModule,
    GenericPagerModule,
    GenericPagerModule,
    GenericContentModule
  ],
  exports: [
    TableComponent
  ]
})

export class GenericTableModule { }

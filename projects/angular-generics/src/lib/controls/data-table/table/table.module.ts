import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { GenericSelectModule } from '../../select/select.module';
import { GenericPagerModule } from '../pager/table-pager.module';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    GenericContentModule
  ],
  exports: [
    TableComponent
  ]
})

export class GenericTableModule { }

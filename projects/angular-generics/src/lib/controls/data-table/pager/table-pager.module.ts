import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePagerComponent } from './table-pager.component';
import { GenericContentModule } from '../../../containers/content/content.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TablePagerComponent
  ],
  imports: [
    CommonModule,
    GenericContentModule,
    FormsModule
  ],
  exports: [
    TablePagerComponent
  ]
})

export class GenericPagerModule { }

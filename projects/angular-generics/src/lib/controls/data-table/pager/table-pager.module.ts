import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePagerComponent } from './table-pager.component';
import { GenericContentModule } from '../../../containers/content/content.module';

@NgModule({
  declarations: [
    TablePagerComponent
  ],
  imports: [
    CommonModule,
    GenericContentModule
  ],
  exports: [
    TablePagerComponent
  ]
})

export class GenericPagerModule { }

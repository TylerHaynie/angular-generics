import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePagerComponent } from './table-pager.component';
import { FormsModule } from '@angular/forms';
import { GenericContentModule } from '../../containers/content/content.module';

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

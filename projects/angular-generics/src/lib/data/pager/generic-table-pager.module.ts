import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material';
import { GenericTablePagerComponent } from './generic-table-pager.component';
import { FormsModule } from '@angular/forms';
import { GenericElementModule } from '../../element/generic-element.module';


@NgModule({
  declarations: [
    GenericTablePagerComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    FormsModule,
    GenericElementModule
  ],
  exports: [
    GenericTablePagerComponent,
  ]
})

export class GenericTablePagerModule { }

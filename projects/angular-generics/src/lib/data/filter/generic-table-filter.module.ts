import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableColumn } from '../table/generic-table-column';
import { GenericTableFilterComponent } from './generic-table-filter.component';
import { MatIconModule } from '@angular/material';
import { GenericButtonComponent } from '../../controls/button/generic-button.component';
import { FormsModule } from '@angular/forms';
import { GenericButtonModule } from '../../controls/button/generic-button.module';

@NgModule({
  declarations: [
    GenericTableFilterComponent
  ],
  imports: [
    CommonModule,
    // GenericTableColumn,
    MatIconModule,
    FormsModule,
    GenericButtonModule
    // GenericButtonComponent,
  ],
  exports: [
    GenericTableFilterComponent
  ]
})

export class GenericTableFilterModule { }

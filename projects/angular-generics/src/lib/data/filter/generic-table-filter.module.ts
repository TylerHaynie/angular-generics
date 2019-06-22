import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableFilterComponent } from './generic-table-filter.component';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { GenericButtonModule } from '../../controls/button/generic-button.module';

@NgModule({
  declarations: [
    GenericTableFilterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    GenericButtonModule
  ],
  exports: [
    GenericTableFilterComponent
  ]
})

export class GenericTableFilterModule { }

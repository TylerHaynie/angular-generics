import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table.component';
import { MatTableModule, MatSortModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenericTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
  ],
  exports: [
    GenericTableComponent,
  ]
})

export class GenericTableModule { }

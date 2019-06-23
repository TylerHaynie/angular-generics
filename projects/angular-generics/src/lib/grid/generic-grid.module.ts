import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericGridComponent } from './generic-grid.component';
import { GenericColumnComponent } from './column/generic-column.component';
import { GenericCellComponent } from './cell/generic-cell.component';

@NgModule({
  declarations: [
    GenericGridComponent,
    GenericColumnComponent,
    GenericCellComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GenericGridComponent,
    GenericColumnComponent,
    GenericCellComponent
  ]
})

export class GenericGridModule { }

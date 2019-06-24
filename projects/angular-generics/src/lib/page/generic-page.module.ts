import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericPageComponent } from './generic-page.component';
import { GenericColumnComponent } from './column/generic-column.component';
import { GenericRowComponent } from './row/generic-row.component';
import { GenericGridComponent } from './grid/generic-grid.component';
import { GenericElementComponent } from './element/generic-element.component';

@NgModule({
  declarations: [
    GenericPageComponent,
    GenericColumnComponent,
    GenericRowComponent,
    GenericGridComponent,
    GenericElementComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GenericPageComponent,
    GenericColumnComponent,
    GenericRowComponent,
    GenericGridComponent,
    GenericElementComponent
  ]
})

export class GenericPageModule { }

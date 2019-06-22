import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericGridComponent } from './generic-grid.component';

@NgModule({
  declarations: [
    GenericGridComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GenericGridComponent
  ]
})

export class GenericGridModule { }

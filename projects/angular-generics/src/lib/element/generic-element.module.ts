import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericElementComponent } from './generic-element.component';

@NgModule({
  declarations: [
    GenericElementComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GenericElementComponent
  ]
})

export class GenericElementModule { }

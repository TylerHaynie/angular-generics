import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericPageComponent } from './generic-page.component';

@NgModule({
  declarations: [
    GenericPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GenericPageComponent
  ]
})

export class GenericPageModule { }

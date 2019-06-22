import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericInputComponent } from './generic-input.component';

@NgModule({
  declarations: [
    GenericInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GenericInputComponent
  ]
})

export class GenericInputModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericInputComponent } from './generic-input.component';
import { GenericElementModule } from '../../element/generic-element.module';

@NgModule({
  declarations: [
    GenericInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericElementModule
  ],
  exports: [
    GenericInputComponent
  ]
})

export class GenericInputModule { }

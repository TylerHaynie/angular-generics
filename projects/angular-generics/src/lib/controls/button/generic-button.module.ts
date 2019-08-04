import { NgModule } from '@angular/core';
import { GenericButtonComponent } from './generic-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericElementModule } from '../../element/generic-element.module';

@NgModule({
  declarations: [
    GenericButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericElementModule
  ],
  exports: [
    GenericButtonComponent
  ]
})

export class GenericButtonModule { }

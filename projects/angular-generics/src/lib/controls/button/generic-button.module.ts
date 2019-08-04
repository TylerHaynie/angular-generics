import { NgModule } from '@angular/core';
import { GenericButtonComponent } from './generic-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenericButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GenericButtonComponent
  ]
})

export class GenericButtonModule { }

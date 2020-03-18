import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { GenericContentModule } from '../../containers/content/content.module';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericContentModule
  ],
  exports: [
    InputComponent
  ]
})

export class GenericInputModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';
import { GenericInputModule } from '../input/input.module';

@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule,
  ],
  exports: [
    SelectComponent
  ]
})

export class GenericSelectModule { }

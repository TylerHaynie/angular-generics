import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RangeComponent } from './range.component';
import { GenericInputModule } from '../input/input.module';

@NgModule({
  declarations: [
    RangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule
  ],
  exports: [
    RangeComponent
  ]
})

export class GenericRangeModule { }

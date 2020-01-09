import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RangeComponent } from './range.component';

@NgModule({
  declarations: [
    RangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    RangeComponent
  ]
})

export class GenericRangeModule { }

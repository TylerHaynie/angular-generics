import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RangeComponent } from './range.component';
import { GenericInputModule } from '../input/input.module';
import { GenericContentModule } from '../../containers/content/content.module';
import { GenericTextModule } from '../text/text.module';

@NgModule({
  declarations: [
    RangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule,
    GenericContentModule,
    GenericTextModule
  ],
  exports: [
    RangeComponent
  ]
})

export class GenericRangeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableFilterComponent } from './table-filter.component';
import { GenericInputModule } from '../../input/input.module';
import { GenericSelectModule } from '../../select/select.module';
import { GenericButtonModule } from '../../button/button.module';
import { GenericRangeModule } from '../../range/range.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { GenericContentModule } from '../../../containers/content/content.module';

@NgModule({
  declarations: [
    TableFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule,
    GenericSelectModule,
    GenericButtonModule,
    GenericRangeModule,
    MatExpansionModule,
    GenericContentModule
  ],
  exports: [
    TableFilterComponent
  ]
})

export class GenericFilterModule { }

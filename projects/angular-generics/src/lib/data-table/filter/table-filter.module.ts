import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableFilterComponent } from './table-filter.component';
import { GenericInputModule } from '../../controls/input/input.module';
import { GenericSelectModule } from '../../controls/select/select.module';
import { GenericButtonModule } from '../../controls/button/button.module';
import { GenericRangeModule } from '../../controls/range/range.module';
import { GenericContentModule } from '../../containers/content/content.module';
import { GenericTextModule } from '../../controls/text/text.module';
import { GenericCheckModule } from '../../controls/check/check.module';

@NgModule({
  declarations: [
    TableFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule,
    GenericTextModule,
    GenericSelectModule,
    GenericButtonModule,
    GenericContentModule,
    GenericCheckModule
  ],
  exports: [
    TableFilterComponent
  ]
})

export class GenericFilterModule { }

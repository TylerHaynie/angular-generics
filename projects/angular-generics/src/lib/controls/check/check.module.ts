import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckComponent } from './check.component';
import { GenericInputModule } from '../input/input.module';
import { GenericContentModule } from '../../containers/content/content.module';

@NgModule({
  declarations: [
    CheckComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule,
    GenericContentModule
  ],
  exports: [
    CheckComponent
  ]
})

export class GenericCheckModule { }

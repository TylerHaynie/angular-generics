import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text.component';
import { GenericInputModule } from '../input/input.module';
import { GenericContentModule } from '../../containers/content/content.module';

@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule,
    GenericContentModule
  ],
  exports: [
    TextComponent
  ]
})

export class GenericTextModule { }

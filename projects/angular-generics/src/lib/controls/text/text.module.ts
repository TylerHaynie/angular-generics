import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text.component';
import { GenericInputModule } from '../input/input.module';

@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule
  ],
  exports: [
    TextComponent
  ]
})

export class GenericTextModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text.component';

@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TextComponent
  ]
})

export class GenericTextModule { }

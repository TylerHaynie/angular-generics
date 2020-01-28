import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileComponent } from './file.component';
import { GenericInputModule } from '../input/input.module';

@NgModule({
  declarations: [
    FileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule
  ],
  exports: [
    FileComponent
  ]
})

export class GenericFileModule { }

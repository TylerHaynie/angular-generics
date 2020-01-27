import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileComponent } from './file.component';

@NgModule({
  declarations: [
    FileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FileComponent
  ]
})

export class GenericFileModule { }

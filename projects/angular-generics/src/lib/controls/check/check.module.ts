import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckComponent } from './check.component';

@NgModule({
  declarations: [
    CheckComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CheckComponent
  ]
})

export class GenericCheckModule { }

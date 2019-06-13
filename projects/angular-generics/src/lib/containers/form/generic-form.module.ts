import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormComponent } from './generic-form.component';
import { GenericButtonModule } from '../../controls/button/generic-button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenericFormComponent
  ],
  imports: [
    CommonModule,
    GenericButtonModule,
    FormsModule
  ],
  exports: [
    GenericFormComponent
  ]
})

export class GenericFormModule { }

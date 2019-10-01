import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericAlertComponent } from './generic-alert.component';
import { GenericElementModule } from '../element/generic-element.module';

@NgModule({
  declarations: [
    GenericAlertComponent,
  ],
  imports: [
    CommonModule,
    GenericElementModule
  ],
  exports: [
    GenericAlertComponent,
  ]
})

export class GenericAlertModule { }

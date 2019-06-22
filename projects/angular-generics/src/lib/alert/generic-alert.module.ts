import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { GenericAlertComponent } from './generic-alert.component';

@NgModule({
  declarations: [
    GenericAlertComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    GenericAlertComponent,
  ]
})

export class GenericAlertModule { }

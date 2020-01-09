import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericAlertComponent } from './generic-alert.component';
import { GenericContentModule } from '../containers/content/content.module';

@NgModule({
  declarations: [
    GenericAlertComponent,
  ],
  imports: [
    CommonModule,
    GenericContentModule
  ],
  exports: [
    GenericAlertComponent,
  ]
})

export class GenericAlertModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericAlertComponent } from './alert.component';
import { GenericContentModule } from '../containers/content/content.module';
import { GenericAlertService } from './alert.service';

@NgModule({
  declarations: [
    GenericAlertComponent,
  ],
  imports: [
    CommonModule,
    GenericContentModule,
  ],
  providers: [
    GenericAlertService
  ],
  exports: [
    GenericAlertComponent,
  ]
})

export class GenericAlertModule { }

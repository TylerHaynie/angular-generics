import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { GenericAlert } from './generic-alert';
import { GenericAlertService } from './generic-alert.service';
import { BehaviorSubject } from 'rxjs';
import { GenericAlertComponent } from './generic-alert.component';

@NgModule({
  declarations: [
    GenericAlertComponent,
    // GenericAlertService,
    // GenericAlert
  ],
  imports: [
    CommonModule,
    MatIconModule,
    // GenericAlert,
    // GenericAlertService,
    // BehaviorSubject,
  ],
  exports: [
    GenericAlertComponent,
    // GenericAlertService,
    // GenericAlert
  ]
})

export class GenericAlertModule { }

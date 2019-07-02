import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericModalComponent } from './generic-modal.component';
import { MatIconModule } from '@angular/material';
import { GenericButtonModule } from '../../controls/button/generic-button.module';

@NgModule({
  declarations: [
    GenericModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    GenericButtonModule
  ],
  exports: [
    GenericModalComponent
  ]
})

export class GenericModalModule { }

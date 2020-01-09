import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericModalComponent } from './generic-modal.component';
import { GenericButtonModule } from '../../controls/button/button.module';

@NgModule({
  declarations: [
    GenericModalComponent
  ],
  imports: [
    CommonModule,
    GenericButtonModule
  ],
  exports: [
    GenericModalComponent
  ]
})

export class GenericModalModule { }

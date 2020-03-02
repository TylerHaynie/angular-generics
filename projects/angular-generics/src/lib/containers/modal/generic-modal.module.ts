import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericModalComponent } from './generic-modal.component';
import { GenericButtonModule } from '../../controls/button/button.module';
import { GenericContentModule } from '../content/content.module';

@NgModule({
  declarations: [
    GenericModalComponent
  ],
  imports: [
    CommonModule,
    GenericButtonModule,
    GenericContentModule
  ],
  exports: [
    GenericModalComponent
  ]
})

export class GenericModalModule { }

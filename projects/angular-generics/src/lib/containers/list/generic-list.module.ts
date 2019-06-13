import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from './generic-list.component';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenericListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    GenericListComponent
  ]
})

export class GenericListModule { }

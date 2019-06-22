import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { GenericDropdownComponent } from './generic-dropdown.component';
import { MatSelectModule, MatIconModule, MatOptionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenericDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatOptionModule,
  ],
  exports: [
    GenericDropdownComponent
  ]
})

export class GenericDropdownModule { }

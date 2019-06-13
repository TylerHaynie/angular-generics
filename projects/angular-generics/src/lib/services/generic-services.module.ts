import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { GenericSearchRequest, GenericSearchResponse } from './generic-search';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // GenericSearchRequest,
    // GenericSearchResponse
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    // BehaviorSubject,
  ],
  exports: [
    // GenericSearchRequest,
    // GenericSearchResponse
  ]
})

export class GenericServiceModule { }

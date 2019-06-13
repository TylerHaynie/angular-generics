import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericDataSource } from './generic-data-source';
import { Subject, Observable } from 'rxjs';
import { CdkTableModule } from '@angular/cdk/table';
import { GenericApiService } from '../../services/generic-api.service';
import { GenericSearchRequest, GenericSearchResponse } from '../../services/generic-search';

@NgModule({
  declarations: [
    // GenericDataSource
  ],
  imports: [
    CommonModule,
    // Subject,
    // Observable,
    CdkTableModule,
    // GenericApiService,
    // GenericSearchRequest,
    // GenericSearchResponse
  ],
  exports: [
    // GenericDataSource
  ]
})

export class GenericDataSourceModule { }

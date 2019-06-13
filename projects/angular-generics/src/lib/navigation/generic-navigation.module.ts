import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { GenericRouteDefinition } from './generic-route-definition';
import { GenericNavigationService } from './generic-navigation.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // GenericRouteDefinition,
    // GenericNavigationService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // BehaviorSubject,
  ],
  exports: [
    // GenericRouteDefinition,
    // GenericNavigationService,
  ]
})

export class GenericNavigationModule { }

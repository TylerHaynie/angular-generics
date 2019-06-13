import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericDropdownComponent } from './generic-dropdown.component';
import { MatSelectModule, MatIconModule, MatOptionModule } from '@angular/material';
import { GenericApiService } from '../../services/generic-api.service';
import { GenericNavigationService } from '../../navigation/generic-navigation.service';
import { GenericRouteDefinition } from '../../navigation/generic-route-definition';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenericDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // GenericApiService,
    // GenericNavigationService,
    // GenericRouteDefinition,
    MatSelectModule,
    MatIconModule,
    MatOptionModule,
  ],
  exports: [
    GenericDropdownComponent
  ]
})

export class GenericDropdownModule { }

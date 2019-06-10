// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {
  MatPaginatorModule, MatToolbarModule,
  MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatInputModule, MatSelectModule,
  MatRadioModule, MatCardModule, MatFormFieldModule,
  MatGridListModule, MatTableModule, MatCheckboxModule,
  MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule,
  MatSlideToggleModule,
  MatSortModule
} from '@angular/material';

// Angular cdk
import { LayoutModule } from '@angular/cdk/layout';

import { GenericFormComponent } from './containers/form/generic-form.component';
import { GenericListComponent } from './containers/list/generic-list.component';
import { GenericButtonComponent } from './controls/button/generic-button.component';
import { GenericDropdownComponent } from './controls/dropdown/generic-dropdown.component';
import { GenericTableComponent } from './data-table/generic-table.component';
import { GenericAlertComponent } from './notifications/alert/generic-alert.component';

@NgModule({
  declarations: [
    GenericFormComponent,
    GenericListComponent,
    GenericButtonComponent,
    GenericDropdownComponent,
    GenericTableComponent,
    GenericAlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  exports: [
    GenericFormComponent,
    GenericListComponent,
    GenericButtonComponent,
    GenericDropdownComponent,
    GenericTableComponent,
    GenericAlertComponent
  ]
})

export class AngularGenericsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {
  GenericAlertModule, GenericButtonModule, GenericCheckModule, GenericContentModule,
  GenericFileModule, GenericFilterModule, GenericModalModule,
  GenericNavigationModule, GenericPagerModule, GenericRangeModule, GenericSelectModule,
  GenericTableModule, GenericTextModule, GenericAlertService
} from 'angular-generics';

import { AppComponent } from './app.component';
import { AlertExampleComponent } from './components/alert-example/alert-example.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { InputExampleComponent } from './components/input-example/input-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalExampleComponent,
    TableExampleComponent,
    InputExampleComponent,
    AlertExampleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    GenericAlertModule,
    GenericButtonModule,
    GenericCheckModule,
    GenericContentModule,
    GenericFileModule,
    GenericFilterModule,
    GenericModalModule,
    GenericNavigationModule,
    GenericPagerModule,
    GenericRangeModule,
    GenericSelectModule,
    GenericTableModule,
    GenericTextModule
  ],
  providers: [
    GenericAlertService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

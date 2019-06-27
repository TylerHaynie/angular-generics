import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  GenericFormModule, GenericListModule, GenericAlertModule,
  GenericTableModule, GenericButtonModule, GenericServiceModule,
  GenericDataSourceModule, GenericNavigationModule,
  GenericTablePagerModule, GenericTableFilterModule, GenericInputModule,
  GenericPageModule
} from 'angular-generics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    GenericPageModule,
    GenericFormModule,
    GenericListModule,
    GenericAlertModule,
    GenericTableModule,
    GenericButtonModule,
    GenericServiceModule,
    GenericInputModule,
    GenericDataSourceModule,
    GenericNavigationModule,
    GenericTablePagerModule,
    GenericTableFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

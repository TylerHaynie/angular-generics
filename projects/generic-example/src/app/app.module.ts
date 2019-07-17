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
  GenericElementModule, GenericModalModule
} from 'angular-generics';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { InputExampleComponent } from './components/input-example/input-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalExampleComponent,
    TableExampleComponent,
    InputExampleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    GenericElementModule,
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
    GenericTableFilterModule,
    GenericModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

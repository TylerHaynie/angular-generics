import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { GenericTableColumn, GenericSearchRequest, GenericTableComponent } from 'angular-generics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {



  // rangeValue: { from: any, to: any };

  // checkBinding1: boolean = false;

  // dropdownSource: string = `https://jsonplaceholder.typicode.com/todos`;
  // selectedDropdownId: number = 0;




  // angular needs an array of 'something' to loop over
  // _gridColumns: number[] = [];

  constructor() {

  }

  ngOnInit() {
    // this._gridColumns = Array.from(Array(4), (x, i) => i);
  }

  ngAfterViewInit() {

  }

}

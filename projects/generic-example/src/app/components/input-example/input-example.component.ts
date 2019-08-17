import { Component, OnInit } from '@angular/core';

export class CustomSelectObject {
  id: number;
  name: string;
}

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html'
})
export class InputExampleComponent implements OnInit {
  dropdownSource: string = `https://jsonplaceholder.typicode.com/todos`;
  dropDownOptions: CustomSelectObject[] = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Steve' },
    { id: 3, name: 'Roger' },
    { id: 4, name: 'Tasha' },
    { id: 5, name: 'Mark' },
    { id: 6, name: 'Brenda' },
    { id: 7, name: 'Tonya' },
  ];

  
  select1: any;
  select2: any;
  select3: any;
  select4: any;

  checkValue1: boolean = false;
  checkValue2: boolean = false;
  checkValue3: boolean = false;
  dateValue: Date = new Date();
  numberValue: number = 0;
  textValue: string = '';

  constructor() { }

  ngOnInit() {
    // testing
    this.select3 = { id: 3, name: 'Roger' };
  }

}

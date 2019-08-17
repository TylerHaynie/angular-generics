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

  selectedItem: any;
  checkValue: boolean = false;
  dateValue: Date = new Date();
  numberValue: number = 0;
  textValue: string = '';

  constructor() { }

  ngOnInit() {
    // testing
    this.selectedItem = { id: 3, name: 'Roger' };
  }

}

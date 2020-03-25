import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html'
})
export class InputExampleComponent implements OnInit {
  dropdownSource: string = `https://jsonplaceholder.typicode.com/todos`;
  dropdownItems: any[] = [];

  staticOptions: { id: number, name: string }[] = [
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
  select3: any = this.staticOptions[2];
  select4: any;

  checkValue1: boolean = true;
  checkValue2: boolean = false;
  checkValue3: boolean = true;
  dateValue: Date = new Date();
  numberValue: number = 0;
  textValue: string = '';

  constructor(private http: HttpClient) {
    this.loadItems();
  }

  ngOnInit() { }

  loadItems() {
    this.http.get(this.dropdownSource)
      .toPromise()
      .then((d: any[]) => {
        this.dropdownItems = d;
      });
  }

}

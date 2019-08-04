import { Component, OnInit } from '@angular/core';

export class CustomSelectObject {
  id: number;
  name: string;
}

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html'
})
export class ListExampleComponent implements OnInit {

  itemList: any[] = [
    { id: 1, name: 'Test Name 1', email: 'test1@test.com' },
    { id: 2, name: 'Test Name 2', email: 'test2@test.com' },
    { id: 3, name: 'Test Name 3', email: 'test3@test.com' },
    { id: 4, name: 'Test Name 4', email: 'test4@test.com' },
    { id: 5, name: 'Test Name 5', email: 'test5@test.com' }
  ];

  searchValue: string = '';

  constructor() { }

  ngOnInit() {
  }


  doSearch() {

  }

  itemClicked(item) {
    console.log(item);
  }

}

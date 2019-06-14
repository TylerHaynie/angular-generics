import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentId: number = 0;
  countrySource: string = `http://localhost:62455/api/countries`;

  dropdownChanged(e) {
    console.log(e);
  }

}

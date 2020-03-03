import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html'
})
export class ModalExampleComponent implements OnInit {
  showDefaultModal: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  buttonClick() {
    console.log('injected button clicked');
  }

}

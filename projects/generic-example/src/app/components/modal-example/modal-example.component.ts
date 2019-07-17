import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html'
})
export class ModalExampleComponent implements OnInit {
  showStepperModal: boolean = false;
  showDefaultModal: boolean = false;
  loopSteps: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { GenericAlertService, GenericAlert } from 'angular-generics';

@Component({
  selector: 'alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.css']
})
export class AlertExampleComponent{

  constructor(private alertService: GenericAlertService) { }

  addAlert(timed: boolean = false) {
    let alert = new GenericAlert();
    alert.message = "You have an alert!";
    if (timed)
      alert.timeout = 2000;

    this.alertService.addAlert(alert);
  }
}

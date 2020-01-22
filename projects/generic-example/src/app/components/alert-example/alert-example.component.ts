import { Component, OnInit } from '@angular/core';
import { GenericAlertService, GenericAlert } from 'angular-generics';

@Component({
  selector: 'alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.css']
})
export class AlertExampleComponent implements OnInit {

  constructor(private alertService: GenericAlertService) { }

  ngOnInit() {
  }

  showAlert(timed: boolean = false) {
    let alert = new GenericAlert();
    alert.message = "You have an alert!";
    alert.timeout = 2000;

    this.alertService.addAlert(alert);
  }


}

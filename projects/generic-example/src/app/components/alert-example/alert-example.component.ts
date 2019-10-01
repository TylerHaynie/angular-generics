import { Component, OnInit } from '@angular/core';
import { GenericAlertService, GenericAlert } from 'angular-generics';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.css']
})
export class AlertExampleComponent implements OnInit {

  constructor(private alertService: GenericAlertService) { }

  ngOnInit() {
  }

  showAlert(timed: boolean = false) {
    const a = new GenericAlert(
      {
        message: "Test Message",
        timeout: timed ? 1500 : 0,
        class: 'error',
      }
    );

    this.alertService.addAlert(a);
  }

}

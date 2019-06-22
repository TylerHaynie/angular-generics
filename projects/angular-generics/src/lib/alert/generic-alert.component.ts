import { Component } from '@angular/core';
import { GenericAlert } from './generic-alert';
import { GenericAlertService } from './generic-alert.service';

@Component({
  selector: 'generic-alert',
  templateUrl: './generic-alert.component.html',
  styleUrls: ['../styles/generic.css']
})
export class GenericAlertComponent {
  alerts: GenericAlert[] = [];

  constructor(alertService: GenericAlertService) {

    alertService.alertAdded$.subscribe({
      next: (alert: GenericAlert) => this.alertAdded(alert),
    });

    alertService.alertClosed$.subscribe({
      next: (alert: GenericAlert) => this.alertClosed(alert),
    });
  }

  alertAdded(alert: GenericAlert) {
    if (alert) {
      this.alerts.push(alert);
    }
  }

  alertClosed(alert: GenericAlert) {
    if (alert) {
      console.log('closing', alert);

      const index = this.alerts.indexOf(alert);

      if (index > -1) {
        this.alerts.splice(index, 1);
      }

    }
  }

}

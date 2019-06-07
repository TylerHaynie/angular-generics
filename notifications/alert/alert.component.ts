import { Component } from '@angular/core';
import { Alert } from './alert';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  alerts: Alert[] = [];

  constructor(alertService: AlertService) {

    alertService.alertAdded$.subscribe({
      next: (alert: Alert) => this.alertAdded(alert),
    });

    alertService.alertClosed$.subscribe({
      next: (alert: Alert) => this.alertClosed(alert),
    });
  }

  alertAdded(alert: Alert) {
    if (alert) {
      this.alerts.push(alert);
    }
  }

  alertClosed(alert: Alert) {
    if (alert) {
      console.log('closing', alert);

      let index = this.alerts.indexOf(alert);

      if (index > -1) {
        this.alerts.splice(index, 1);
      }

    }
  }

}

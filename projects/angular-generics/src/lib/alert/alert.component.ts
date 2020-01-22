import { Component, ViewEncapsulation } from '@angular/core';
import { GenericAlert } from './models/generic-alert';
import { GenericAlertService } from './alert.service';

@Component({
  selector: 'ag-alert',
  templateUrl: './generic-alert.component.html',
  styleUrls: ['./generic-alert.component.css'],
  providers: [GenericAlertService],
  encapsulation: ViewEncapsulation.None
})
export class GenericAlertComponent {
  protected alerts: GenericAlert[] = [];

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
      const index = this.alerts.indexOf(alert);
      if (index > -1) {
        this.alerts.splice(index, 1);
      }

    }
  }

}

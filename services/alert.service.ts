import { BehaviorSubject } from 'rxjs';
import { Alert } from '../notifications/alert/alert';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _addAlertSource = new BehaviorSubject<Alert>(null);
  alertAdded$ = this._addAlertSource.asObservable();

  private _closeAlertSource = new BehaviorSubject<Alert>(null);
  alertClosed$ = this._closeAlertSource.asObservable();

  constructor() { }

  addAlert(alert: Alert) {
    if (alert) {
      this._addAlertSource.next(alert);
      if (alert.timeout > 0) {
        setTimeout(() => {
          this.closeAlert(alert);
        }, alert.timeout);
      }
    }
  }

  closeAlert(alert: Alert) {
    if (alert) {
      this._closeAlertSource.next(alert);
    }
  }
}

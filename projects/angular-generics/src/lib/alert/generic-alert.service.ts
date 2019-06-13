import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { GenericAlert } from './generic-alert';

@Injectable({
  providedIn: 'root'
})
export class GenericAlertService {
  private _addAlertSource = new BehaviorSubject<GenericAlert>(null);
  alertAdded$ = this._addAlertSource.asObservable();

  private _closeAlertSource = new BehaviorSubject<GenericAlert>(null);
  alertClosed$ = this._closeAlertSource.asObservable();

  constructor() { }

  addAlert(alert: GenericAlert) {
    if (alert) {
      this._addAlertSource.next(alert);
      if (alert.timeout > 0) {
        setTimeout(() => {
          this.closeAlert(alert);
        }, alert.timeout);
      }
    }
  }

  closeAlert(alert: GenericAlert) {
    if (alert) {
      this._closeAlertSource.next(alert);
    }
  }
}

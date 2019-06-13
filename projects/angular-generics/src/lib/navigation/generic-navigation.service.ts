import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { GenericRouteDefinition } from './generic-route-definition';

@Injectable({
  providedIn: 'root'
})
export class GenericNavigationService {
  private _navItemSource = new BehaviorSubject<GenericRouteDefinition[]>([]);
  navItems$ = this._navItemSource.asObservable();

  private _navToSource = new BehaviorSubject<GenericRouteDefinition>(null);
  navTo$ = this._navToSource.asObservable();

  constructor() { }

  updateNavItems(routeDefinitions: GenericRouteDefinition[]) {
    this._navItemSource.next(routeDefinitions);
  }

  navigateTo(route: GenericRouteDefinition) {
    this._navToSource.next(route);
  }
}

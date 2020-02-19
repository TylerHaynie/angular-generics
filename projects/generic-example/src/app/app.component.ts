import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { MenuItem } from 'angular-generics';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  menuItems = [
    new MenuItem({
      name: 'examples',
      display: 'Examples',
      icon: 'th',
      subItems: [
        new MenuItem({
          name: 'inputs',
          display: 'Inputs',
          route: 'examples/input'
        }),
        new MenuItem({
          name: 'table',
          display: 'Table',
          route: 'examples/table'
        }),
        new MenuItem({
          name: 'modal',
          display: 'Modal Dialog',
          route: 'examples/modal'
        }),
        new MenuItem({
          name: 'alert',
          display: 'Alerts',
          route: 'examples/alert'
        }),
      ]
    }),
    new MenuItem({
      name: 'menu2',
      display: 'Menu 2',
      icon: 'list-ul',
    }),
    new MenuItem({
      name: 'menu3',
      display: 'Menu 3',
      icon: 'layer-group',
    }),
    new MenuItem({
      name: 'menu4',
      display: 'Menu 4',
      icon: 'exchange-alt',
    }),
    new MenuItem({
      name: 'menu5',
      display: 'Menu 5',
      icon: 'chart-pie',
    })
  ];

  menuSelect(item: MenuItem) {
    if (item && item.route) {
      console.log(item);
      this.router.navigateByUrl(item.route);
    }
  }

}

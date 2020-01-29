import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'angular-generics';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html',
  styleUrls: ['./menu-example.component.css']
})
export class MenuExampleComponent implements OnInit {

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

  constructor() { }

  ngOnInit() { }

}

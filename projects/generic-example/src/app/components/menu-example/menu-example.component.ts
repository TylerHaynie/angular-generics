import { Component, OnInit } from '@angular/core';
import { MenuItem } from "../../../../../angular-generics/src/lib/navigation/menu-item";

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
          name: 'list',
          display: 'Simple List',
          route: 'examples/list'
        }),
        new MenuItem({
          name: 'Modal',
          display: 'Modal Dialog',
          route: 'examples/modal'
        }),
      ]
    }),
    new MenuItem({
      name: 'menu2',
      display: 'Menu 2',
      icon: 'list-ul',
      subItems: [
        new MenuItem({
          name: 'import',
          display: 'Import',
          click: (item: MenuItem) => {
            alert(`${item.name} was clicked.`);
          }
        }),
        new MenuItem({
          name: 'search',
          display: 'Search',
          click: (item: MenuItem) => {
            alert(`${item.name} was clicked.`);
          }
        }),
      ]
    }),
    new MenuItem({
      name: 'menu3',
      display: 'Menu 3',
      icon: 'layer-group',
      subItems: [
        new MenuItem({
          name: 'export',
          display: 'Export',
          click: (item: MenuItem) => {
            alert(`${item.name} was clicked.`);
          }
        }),
        new MenuItem({
          name: 'ammend',
          display: 'Ammend',
          click: (item: MenuItem) => {
            alert(`${item.name} was clicked.`);
          }
        }),
      ]
    }),
    new MenuItem({
      name: 'menu4',
      display: 'Menu 4',
      icon: 'exchange-alt',
      subItems: [
        new MenuItem({
          name: 'menu4-create',
          display: 'View Listing',
        }),
        new MenuItem({
          name: 'menu4-search',
          display: 'Help',
        }),
      ]
    }),
    new MenuItem({
      name: 'menu5',
      display: 'Menu 5',
      icon: 'chart-pie',
      subItems: [
        new MenuItem({
          name: 'menu5-view',
          display: 'View',
        }),
      ]
    })];

  constructor() { }

  ngOnInit() { }

}

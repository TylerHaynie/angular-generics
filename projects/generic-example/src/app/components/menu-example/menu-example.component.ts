import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html',
  styleUrls: ['./menu-example.component.css']
})
export class MenuExampleComponent implements OnInit {

  hoveredMenu: string;
  selectedMenu: string;

collapsed: boolean = false;
  items = [
    {
      name: 'menu1',
      display: 'Menu 1',
      icon: 'layer-group',
      subItems: [
        {
          name: 'menu1-create',
          display: 'Create',
        },
        {
          name: 'menu1-search',
          display: 'Show All',
        },
      ]
    },
    {
      name: 'menu2',
      display: 'Menu 2',
      icon: 'list-ul',
      subItems: [
        {
          name: 'menu2-import',
          display: 'Import',
        },
        {
          name: 'menu2-search',
          display: 'Search',
        },
      ]
    },
    {
      name: 'menu3',
      display: 'Menu 3',
      icon: 'th',
      subItems: [
        {
          name: 'menu3-import',
          display: 'Export',
        },
        {
          name: 'menu3-search',
          display: 'Ammend',
        },
      ]
    },
    {
      name: 'menu4',
      display: 'Menu 4',
      icon: 'exchange-alt',
      subItems: [
        {
          name: 'menu4-create',
          display: 'View Listing',
        },
        {
          name: 'menu4-search',
          display: 'Help',
        },
      ]
    },
    {
      name: 'menu5',
      display: 'Menu 5',
      icon: 'chart-pie',
      subItems: [
        {
          name: 'menu5-view',
          display: 'View',
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }

}

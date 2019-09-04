import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  hoveredMenu: string;
  selectedMenu: string;

  collapsed: boolean = false;
  items = [
    {
      name: 'containers',
      display: 'Containers',
      icon: 'th',
      subItems: [
        {
          name: 'container-list',
          display: 'List',
          route: 'examples/list'
        },
        {
          name: 'container-table',
          display: 'Table',
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
      icon: 'layer-group',
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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    if (path && path.length > 0) {
      this.router.navigateByUrl(path);
    }
  }

}

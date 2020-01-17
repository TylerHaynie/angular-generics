import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'ag-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
  @Input() width: string | number = 150;
  @Input() menuItems: MenuItem[] = [];
  @Input() menuHeader: string = 'Menu';

  hoveredMenu: string;
  selectedMenu: string;
  collapsed: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  menuItemClicked(item: MenuItem){
    if(item && item.route){
      this.navigateTo(item.route);
    }

    this.selectedMenu = item.name;
  }

  navigateTo(path: string) {
    if (path && path.length > 0) {
      this.router.navigateByUrl(path);
    }
  }

}

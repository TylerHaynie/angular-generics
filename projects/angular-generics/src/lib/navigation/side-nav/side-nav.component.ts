import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'ag-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
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

  navigateTo(path: string) {
    if (path && path.length > 0) {
      this.router.navigateByUrl(path);
    }
  }

}

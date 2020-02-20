import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'ag-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
  @Input() width: string | number = 200;
  @Input() menuItems: MenuItem[] = [];
  @Input() menuHeader: string = 'Menu';

  @Output() select: EventEmitter<MenuItem>;

  openedMenu: string;
  hoveredMenu: string;
  selectedMenu: string;
  collapsed: boolean = false;

  constructor() {
    this.select = new EventEmitter<MenuItem>();
  }

  ngOnInit() {
  }

  menuItemClicked(item: MenuItem) {
    // this.selectedMenu = item.name;
    this.select.emit(item);
  }

}

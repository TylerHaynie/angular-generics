import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ag-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css',
    '../../../../styles/base.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopNavComponent implements OnInit {
  @Input() logoUrl: string;
  @Input() avatarUrl: string;
  @Input() notifyCount: number = 0;
  @Input() route: string = "/";

  constructor() { }

  ngOnInit() {
  }

}

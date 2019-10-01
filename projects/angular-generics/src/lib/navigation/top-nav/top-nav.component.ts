import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
@Input() height: string | number = '100%';
@Input() logoUrl: string;
@Input() avatarUrl: string;
@Input() notifyCount: number = 0;
@Input() route: string = "/";

  constructor() { }

  ngOnInit() {
  }

}

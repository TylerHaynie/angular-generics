import { Component, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['../../styles/generic.css']
})
export class GenericListComponent implements OnInit {
  @Input() title: string = 'List';
  @Input() listTemplate: TemplateRef<any>;
  @Input() filterTemplate: TemplateRef<any>;

  @Output() search: EventEmitter<string>;

  searchValue: string = '';

  constructor() {
    this.search = new EventEmitter<string>();
  }

  ngOnInit() {

  }

  doSearch() {
    this.search.emit(this.searchValue);
  }

  // itemClicked(item: T) {
  //   this.selectionChanged.emit(item);
  // }

}

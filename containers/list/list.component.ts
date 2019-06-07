import { Component, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'list-wrapper',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
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

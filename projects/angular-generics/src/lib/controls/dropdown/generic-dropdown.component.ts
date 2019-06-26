import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GenericApiService } from '../../services/generic-api.service';
import { GenericNavigationService } from '../../navigation/generic-navigation.service';
import { GenericRouteDefinition } from '../../navigation/generic-route-definition';

@Component({
  selector: 'ag-dropdown',
  templateUrl: './generic-dropdown.component.html',
  styleUrls: ['../../styles/generic.css']
})
export class GenericDropdownComponent implements OnInit, OnChanges {
  @Input() displayProperty: string = '';
  @Input() indexProperty: string = 'id';
  @Input() disabled: boolean = false;
  @Input() source: string = '';
  @Input() selectedId: number;
  @Input() addItemRoute: string = '';

  @Output() selectionChanged: EventEmitter<any>;

  itemList: any[];
  currentSelection: any;

  constructor(private api: GenericApiService, private navService: GenericNavigationService) {
    this.selectionChanged = new EventEmitter<any>();
  }

  ngOnInit() {
    // if (this.source) {
    //   this.getItems();
    // }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.source) {
      const sourceChange = changes.source.currentValue !== changes.source.previousValue;
      if (sourceChange) {
        this.getItems();
      }
    }

    if (this.itemList && changes.selectedId) {
      const idChanged = changes.selectedId.currentValue !== changes.selectedId.previousValue;
      if (idChanged) {
        this.changedSelection(changes.selectedId.currentValue);
        // this.currentSelection = this.itemList.find(x => x[this.indexProperty] === this.selectedId);
        // console.log(this.currentSelection);
        // this.selectionChanged.emit(this.currentSelection);
      }
    }
  }

  getItems() {
    if (this.source) {
      console.log('source', this.source);

      this.api.get(this.source)
        .then((items) => {
          if (items) {
            this.itemList = items;
          }
        });
    }

  }

  changedSelection(id: number) {
    console.log('selected id', id);
    if (this.itemList) {
      this.selectedId = id;
      this.currentSelection = this.itemList.find(x => x[this.indexProperty] === this.selectedId);
      this.selectionChanged.emit(this.currentSelection);
    }
  }

  addItem() {
    this.navService.navigateTo(new GenericRouteDefinition({ path: this.addItemRoute }));
  }

}
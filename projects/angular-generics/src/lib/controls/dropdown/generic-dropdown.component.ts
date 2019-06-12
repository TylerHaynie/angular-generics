import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GenericApiService } from '../../services/generic-api.service';
import { GenericNavigationService } from '../../services/navigation/generic-navigation.service';
import { GenericRouteDefinition } from '../../services/navigation/generic-route-definition';

@Component({
  selector: 'generic-dropdown',
  templateUrl: './generic-dropdown.component.html'
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
    if (this.source) {
      this.getItems();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.source && !changes.source.isFirstChange()) ||
      (changes.selectedId && !changes.selectedId.isFirstChange())) {
      console.log('source', this.source);
      console.log('selectedId', this.selectedId);

      if (changes.source) {
        const sourceChange = changes.source.currentValue !== changes.source.previousValue;
        if (sourceChange) {
          this.getItems();
        }
      }

      if (this.itemList && changes.selectedId) {
        const idChanged = changes.selectedId.currentValue !== changes.selectedId.previousValue;
        if (idChanged) {
          this.currentSelection = this.itemList.find(x => x[this.indexProperty] === this.selectedId);
          console.log(this.currentSelection);
          this.selectionChanged.emit(this.currentSelection);
        }
      }

    }
  }

  getItems() {
    this.api.get(this.source)
      .then((items) => {
        if (items) {
          this.itemList = items;
        }
      });
  }

  changedSelection(event: any) {
    this.selectedId = event.value;
  }

  addItem() {
    this.navService.navigateTo(new GenericRouteDefinition({ path: this.addItemRoute }));
  }

}

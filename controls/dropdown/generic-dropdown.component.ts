import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GenericService } from '../../services/generic-generic.service';
import { GenericNavigationService } from 'angular-generic/services/navigation/generic-navigation.service';
import { GenericRouteDefinition } from 'angular-generic/services/navigation/generic-route-definition';

@Component({
  selector: 'generic-dropdown',
  templateUrl: './generic-dropdown.component.html',
  styleUrls: ['./generic-dropdown.component.css']
})
export class GenericDropdownComponent implements OnInit {
  @Input() displayProperty: string;
  @Input() indexProperty: string = 'id';
  @Input() disabled: boolean = false;
  @Input() source: any[];
  @Input() placeholder: string = 'Make a Selection';
  @Input() selectedId: number = 0;
  @Input() addItemRoute: string;

  @Output() selectionChanged: EventEmitter<any>;

  currentSelection: any;

  constructor(private api: GenericService, private navService: GenericNavigationService) {
    this.selectionChanged = new EventEmitter<any>();
  }

  ngOnInit() {}

  changedSelection(event: any = null) {
    if (event) {
      this.selectedId = event.value;
      this.setSelection();
      this.selectionChanged.emit(this.currentSelection);
      console.log('Selected', this.currentSelection);
    }
  }

  setSelection() {
    if (this.source) {
      this.currentSelection = this.source.find(x => x[this.indexProperty] === this.selectedId);
    }
  }

  addItem() {
    this.navService.navigateTo(new GenericRouteDefinition({ path: this.addItemRoute }));
  }

}

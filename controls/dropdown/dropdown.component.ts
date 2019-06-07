import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { NavigationService } from '../../../services/navigation.service';
import { RouteDefinition } from '../../../components/button-nav/navigation-definition';

@Component({
  selector: 'generic-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() displayProperty: string;
  @Input() indexProperty: string = 'id';
  @Input() disabled: boolean = false;
  @Input() source: any[];
  @Input() placeholder: string = 'Make a Selection';
  @Input() selectedId: number = 0;
  @Input() addItemRoute: string;

  @Output() selectionChanged: EventEmitter<any>;

  currentSelection: any;

  constructor(private api: GenericService, private navService: NavigationService) {
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
    if (this.selectedId && this.selectedId > 0) {
      this.currentSelection = this.source.find(x => x[this.indexProperty] === this.selectedId);
    }
  }

  addItem() {
    this.navService.navigateTo(new RouteDefinition({ path: this.addItemRoute }));
  }

}

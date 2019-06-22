import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GENERIC_PAGE_MODE } from '../../enums/generic-page-mode';

@Component({
  selector: 'generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['../../styles/generic.css']
})
export class GenericFormComponent implements OnInit {

  @Input() title: string = 'Title';
  @Input() detailTop: string = 'Detail Top';
  @Input() detailBottom: string = 'Detail Bottom';

  // buttons
  @Input() showCancel: boolean = true;
  @Output() cancelClicked: EventEmitter<null>;
  @Input() showSave: boolean = true;
  @Output() saveClicked: EventEmitter<null>;
  @Input() showEdit: boolean = true;
  @Output() editClicked: EventEmitter<null>;

  @Input() pageMode: GENERIC_PAGE_MODE = GENERIC_PAGE_MODE.LOADING;

  constructor() {
    this.cancelClicked = new EventEmitter<null>();
    this.saveClicked = new EventEmitter<null>();
    this.editClicked = new EventEmitter<null>();
  }

  ngOnInit() {
  }

  doSave() {
    this.saveClicked.emit();
  }

  doEdit() {
    this.editClicked.emit();
  }

  doCancel() {
    this.cancelClicked.emit();
  }

}

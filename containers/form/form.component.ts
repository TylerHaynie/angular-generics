import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PAGE_MODE } from 'src/app/generic-angular/enums/page-mode';

@Component({
  selector: 'form-wrapper',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

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

  @Input() pageMode: PAGE_MODE = PAGE_MODE.LOADING;

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

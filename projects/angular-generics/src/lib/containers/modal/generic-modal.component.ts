import { Component, Input, TemplateRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ag-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GenericModalComponent {
  @Input() footer: TemplateRef<any>;
  @Input() header: TemplateRef<any>;
  @Input() title: string;

  @Output() closed: EventEmitter<null>;

  showModal: boolean = false;

  constructor() {
    this.closed = new EventEmitter<null>();
  }

  open() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
    this.closed.emit();
  }

}

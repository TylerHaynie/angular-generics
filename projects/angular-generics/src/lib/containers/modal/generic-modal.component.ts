import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ag-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})
export class GenericModalComponent {
  @Input() footer: TemplateRef<any>;
  @Input() header: TemplateRef<any>;

  @Input() title: string = '';
  @Output() closed: EventEmitter<any> = new EventEmitter();

  showModal: boolean = false;

  constructor() { }

  open() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
    this.closed.emit();
  }

}

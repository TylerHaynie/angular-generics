import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ag-modal',
  templateUrl: './generic-modal.component.html'
})
export class GenericModalComponent {
  @Input() buttons: TemplateRef<any>;
  @Input('show') showModal: boolean = false;
  @Input() title: string = '';

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }
}

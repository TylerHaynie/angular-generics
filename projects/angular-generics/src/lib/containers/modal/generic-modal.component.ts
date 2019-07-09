import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { AbstractValueAccessor } from 'dist/angular-generics/lib/helpers/abstract-value-accessor';

// might pop out the stepper into another control

@Component({
  selector: 'ag-modal',
  templateUrl: './generic-modal.component.html'
})
export class GenericModalComponent {
  @Input() buttons: TemplateRef<any>;
  @Input('show') showModal: boolean = false;
  @Input() title: string = '';
  @Input() type: 'stepper' | 'default' = 'default';
  @Input() steps: number = 0;
  @Input() loop: boolean = false;

  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  step: number = 1;

  constructor() { }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }

  finish() {
    this.complete.emit();
    this.hide();
  }

  closeModal() {
    this.closed.emit();
    this.hide();
  }

  nextClicked() {
    this.step === this.steps ? this.step = 1 : this.step = this.step + 1;
  }

  previousClicked() {
    this.step === 1 ? this.step = this.steps : this.step = this.step - 1;
  }
}

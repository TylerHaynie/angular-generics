import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

// might pop out the stepper into another control

@Component({
  selector: 'ag-modal',
  templateUrl: './generic-modal.component.html'
})
export class GenericModalComponent {
  @Input() buttons: TemplateRef<any>;

  @Input() title: string = '';
  @Input() type: 'stepper' | 'default' = 'default';
  @Input() steps: number = 0;
  @Input() loop: boolean = false;

  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  step: number = 1;
  showModal: boolean = false;

  constructor() { }

  open() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
    this.closed.emit();
  }

  finish() {
    this.complete.emit();
  }

  nextClicked() {
    this.step === this.steps ? this.step = 1 : this.step = this.step + 1;
  }

  previousClicked() {
    this.step === 1 ? this.step = this.steps : this.step = this.step - 1;
  }

  // private dispose(): void {
  //   Object.assign(this, null);
  // }
}

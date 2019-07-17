import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

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
    this.reset();
  }

  close() {
    this.closed.emit();
    this.reset();
  }

  nextClicked() {
    this.step === this.steps ? this.step = 1 : this.step = this.step + 1;
  }

  previousClicked() {
    this.step === 1 ? this.step = this.steps : this.step = this.step - 1;
  }

  private reset(): void {
    this.buttons = null;
    this.showModal = false;
    this.title = '';
    this.type = 'default';
    this.steps = 0;
    this.loop = false;
    this.step = 1;
  }

  // private dispose(): void {
  //   Object.assign(this, null);
  // }
}

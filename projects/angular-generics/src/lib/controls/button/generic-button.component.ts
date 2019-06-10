import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css']
})
export class GenericButtonComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() isEnabled: boolean = true;
  @Input() showIcon: boolean = false;
  @Input() color: 'red' | 'green' | 'blue' | 'purple' = 'blue';

  @Output() clicked: EventEmitter<null>;

  constructor() {
    this.clicked = new EventEmitter<null>();
  }

  ngOnInit() {
  }

  buttonClicked() {
    this.clicked.emit();
  }

}

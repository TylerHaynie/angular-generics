import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'styled-button',
  templateUrl: './styled-button.component.html',
  styleUrls: ['./styled-button.component.css']
})
export class StyledButtonComponent implements OnInit {
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

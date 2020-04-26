import { Component, Input, ViewEncapsulation, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { GenericInputAccessor, ValueAccessProvider } from '../generic-control/generic-input-accessor';
import { IGenericInput } from '../generic-control/generic-input.interface';

@Component({
  selector: 'ag-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css',
    '../../../../styles/base.css'],
  providers: [ValueAccessProvider(CheckComponent)],
    encapsulation: ViewEncapsulation.None
})
export class CheckComponent extends GenericInputAccessor implements IGenericInput, OnChanges {
  @Input() inputType: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() labelPos: 'top' | 'right' | 'bottom' | 'left' = 'top';

  @Input() trueText: string = 'Yes';
  @Input() falseText: string = 'No';

  constructor(public elementRef: ElementRef) {
    super()

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.style.setProperty('--sliderTrueText', `'${this.trueText}'`);
    this.elementRef.nativeElement.style.setProperty('--sliderFalseText', `'${this.falseText}'`);
  }
}

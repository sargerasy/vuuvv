import { Component, ViewEncapsulation, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: '[md-button]:not(a), [md-raised-button]:not(a), [md-fab]:not(a)',
  template: require('./button.html'),
  // styles: [require('./button.scss')],
  styles: [require('./button.scss')],
  host: {
    '(mousedown)': 'onMousedown()',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
    '[class.md-button-focus]': 'isKeyboardFocused',
  },
  encapsulation: ViewEncapsulation.None,
})
export class MdButton {
  isMouseDown: boolean = false;

  isKeyboardFocused: boolean = false;

  onMousedown() {
    this.isMouseDown = true;
    setTimeout(() => {
      this.isMouseDown = false;
    }, 100);
  }

  onFocus() {
    this.isKeyboardFocused = !this.isMouseDown;
  }

  onBlur() {
    this.isKeyboardFocused = false;
  }
}

@Component({
  selector: 'a[md-button], a[md-raised-button], a[md-fab]',
  inputs: ['disabled'],
  template: require('./button.html'),
  // styles: [require('./button.scss')],
  host: {
    '(click)': 'onClick($event)',
    '(mousedown)': 'onMousedown()',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
    '[tabIndex]': 'tabIndex',
    '[class.md-button-focus]': 'isKeyboardFocused',
    '[attr.aria-disabled]': 'isAriaDisabled',
  }
})
export class MdAnchor extends MdButton implements OnChanges{
  tabIndex: number;
  disabled_: boolean;

  get disabled(): boolean {
    return this.disabled_;
  }

  set disabled(value) {
    this.disabled_ = value != null && this.disabled !== false;
  }

  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
    }
  }

  ngOnChanges(changes:{[propName: string]:SimpleChange}) {
    this.tabIndex = this.disabled ? -1 : 0;
  }

  get isAriaDisabled(): string {
    return this.disabled ? 'true' : 'false';
  }
}

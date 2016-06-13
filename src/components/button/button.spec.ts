import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  beforeEachProviders,
  beforeEach
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
// import { AsyncTestFn } from '@angular/core/testing';
import { provide, Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MdButton } from './button';


describe('MdButton', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => { builder = tcb; }));

  describe('button[md-button]', () => {
    it('should handle a click on the button', (done: () => void) => {
      return builder.createAsync(TestApp).then((fixture) => {
        let testComponent = fixture.debugElement.componentInstance;
        let buttonDebugElement = fixture.debugElement.query(By.css('button'));

        buttonDebugElement.nativeElement.click();
        expect(testComponent.clickCount).toBe(1);
        done();
      });
    });
  });
});

/** Gets a child DebugElement by tag name. */
function getChildDebugElement(parent: DebugElement, tagName: string): DebugElement {
  return parent.query(debugEl => debugEl.nativeElement.tagName.toLowerCase() === tagName);
}

@Component({
  selector: 'test-app',
  template: `<button md-button type="button" (click)="increment()" [disabled]="isDisabled">Go</button>`,
  directives: [MdButton],
})
class TestApp {
  clickCount: number = 0;
  isDisabled: boolean = false;

  increment() {
    this.clickCount++;
  }
}

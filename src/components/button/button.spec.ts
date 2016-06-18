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

import { MdButton, MdAnchor } from './button';


describe('MdButton', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => { builder = tcb; }));

  // General button tests
  it('should apply class based on color attribute', (done: () => void) => {
    return builder.createAsync(TestApp).then((fixture) => {
      let testComponent = fixture.debugElement.componentInstance;
      let buttonDebugElement = fixture.debugElement.query(By.css('button'));
      let aDebugElement = fixture.debugElement.query(By.css('a'));

      testComponent.buttonColor = 'primary';
      fixture.detectChanges();
      expect(buttonDebugElement.nativeElement.classList.contains('md-primary')).toBe(true);
      expect(aDebugElement.nativeElement.classList.contains('md-primary')).toBe(true);

      testComponent.buttonColor = 'accent';
      fixture.detectChanges();
      expect(buttonDebugElement.nativeElement.classList.contains('md-accent')).toBe(true);
      expect(aDebugElement.nativeElement.classList.contains('md-accent')).toBe(true);

      done();
    });
  });

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

    it('should not increment if disabled', (done: () => void) => {
      return builder.createAsync(TestApp).then((fixture) => {
        let testComponent = fixture.debugElement.componentInstance;
        let buttonDebugElement = fixture.debugElement.query(By.css('button'));

        testComponent.isDisabled = true;
        fixture.detectChanges();

        buttonDebugElement.nativeElement.click();

        expect(testComponent.clickCount).toBe(0);
        done();
      });
    });
  });

  // Anchor button tests
  describe('a[md-button]', () => {
    it('should not redirect if disabled', (done: () => void) => {
      return builder.createAsync(TestApp).then((fixture) => {
        let testComponent = fixture.debugElement.componentInstance;
        let buttonDebugElement = fixture.debugElement.query(By.css('a'));

        testComponent.isDisabled = true;
        fixture.detectChanges();

        buttonDebugElement.nativeElement.click();
        // will error if page reloads
        done();
      });
    });

    it('should remove tabindex if disabled', (done: () => void) => {
      return builder.createAsync(TestApp).then((fixture) => {
        let testComponent = fixture.debugElement.componentInstance;
        let buttonDebugElement = fixture.debugElement.query(By.css('a'));
        expect(buttonDebugElement.nativeElement.getAttribute('tabIndex')).toBe(null);

        testComponent.isDisabled = true;
        fixture.detectChanges();
        expect(buttonDebugElement.nativeElement.getAttribute('tabIndex')).toBe('-1');

        done();
      });
    });

    it('should add aria-disabled attribute if disabled', (done: () => void) => {
      return builder.createAsync(TestApp).then((fixture) => {
        let testComponent = fixture.debugElement.componentInstance;
        let buttonDebugElement = fixture.debugElement.query(By.css('a'));
        fixture.detectChanges();
        expect(buttonDebugElement.nativeElement.getAttribute('aria-disabled')).toBe('false');

        testComponent.isDisabled = true;
        fixture.detectChanges();
        expect(buttonDebugElement.nativeElement.getAttribute('aria-disabled')).toBe('true');

        done();
      });
    });
  });
});

@Component({
  selector: 'test-app',
  template: `
    <button md-button type="button" (click)="increment()" [disabled]="isDisabled" [color]="buttonColor">
      Go
    </button>
    <a href="http://www.google.com" md-button [disabled]="isDisabled" [color]="buttonColor"></a>
  `,
  directives: [MdButton, MdAnchor],
})
class TestApp {
  clickCount: number = 0;
  isDisabled: boolean = false;

  increment() {
    this.clickCount++;
  }
}

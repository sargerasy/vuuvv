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
import { provide, Component } from '@angular/core';

import { MdButton } from './button';

describe('MdButton', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => { builder = tcb; }));

  it('should ...', () => {
    return builder.createAsync(<any>MdButton).then((fixture) => {
      fixture.detectChanges();
    });
  });
});

@Component({
  selector: 'test-app',
  template: `<button md-button type="button" (click)="increment()"`,
  directives: [MdButton],
})
class TestApp {
  clickCount: number = 0;
  isDisabled: boolean = false;

  increment() {
    this.clickCount++;
  }
}

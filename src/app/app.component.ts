import {Component} from '@angular/core';

import '../styles.scss';

@Component({
  selector: 'vu-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})

export class AppComponent {
  defaultMeaning: number = 42;

  meaningOfLife(meaning: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`
  }
}
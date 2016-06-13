import {Component} from '@angular/core';

import '../styles.scss';

import { MdButton } from '../components/button/button';

@Component({
  selector: 'vu-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  directives: [MdButton]
})

export class AppComponent {
}

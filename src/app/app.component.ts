import {Component, ViewEncapsulation} from '@angular/core';

import '../styles.scss';

import { MdButton } from '../components/button/button';
import { MD_CARD_DIRECTIVES } from '../components/card/card';
import { Dir } from '../directives/dir/dir';
import { MD_SIDENAV_DIRECTIVES } from '../components/sidenav/sidenav';

@Component({
  selector: 'vu-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  directives: [MdButton, MD_CARD_DIRECTIVES, Dir, MD_SIDENAV_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
}

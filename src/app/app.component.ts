import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import '../styles.scss';

import { ButtonDemo } from './button/button-demo';
import { CardDemo } from './card/card-demo';
import { SidenavDemo } from './sidenav/sidenav-demo';
import { Dir } from '../directives/dir/dir';
import { MdButton } from '../components/button/button';

@Component({
  selector: 'home',
  template: ''
})
export class Home {}

@Component({
  selector: 'vu-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  directives: [ROUTER_DIRECTIVES, Dir, MdButton],
  encapsulation: ViewEncapsulation.None,
})
@RouteConfig([
  {path: '/', name: 'Home', component: Home},
  {path: '/button', name: 'ButtonDemo', component: ButtonDemo},
  {path: '/card', name: 'CardDemo', component: CardDemo},
  {path: '/sidenav', name: 'SidenavDemo', component: SidenavDemo}
])
export class AppComponent {
}

import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import '../styles.scss';

import { ButtonDemo } from './button/button-demo';
import { CardDemo } from './card/card-demo';
import { SidenavDemo } from './sidenav/sidenav-demo';
import { ProgressCircleDemo } from './progress-circle/progress-circle-demo';
import { PortalDemo } from './portal/portal-demo';
import { Dir } from '../directives/dir/dir';
import { MdButton } from '../components/button/button';

@Component({
  selector: 'home',
  template: ''
})
export class Home {}

@Component({
  selector: 'vu-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  directives: [ROUTER_DIRECTIVES, Dir, MdButton],
  encapsulation: ViewEncapsulation.None,
})
@RouteConfig([
  {path: '/', name: 'Home', component: Home},
  {path: '/button', name: 'ButtonDemo', component: ButtonDemo},
  {path: '/card', name: 'CardDemo', component: CardDemo},
  {path: '/sidenav', name: 'SidenavDemo', component: SidenavDemo},
  {path: '/progress-circle', name: 'ProgressCircleDemo', component: ProgressCircleDemo},
  {path: '/portal', name: 'PortalDemo', component: PortalDemo},
])
export class AppComponent {
}

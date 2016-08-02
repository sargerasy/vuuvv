import { Component } from '@angular/core';
import { MdButton } from '../../components/button/button';
import { MD_SIDENAV_DIRECTIVES } from '../../components/sidenav/sidenav';

@Component({
  selector: 'sidenav-demo',
  templateUrl: './sidenav-demo.html',
  styleUrls: ['./sidenav-demo.scss'],
  directives: [MD_SIDENAV_DIRECTIVES]
})
export class SidenavDemo {
}

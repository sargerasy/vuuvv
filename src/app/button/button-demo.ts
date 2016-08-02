import { Component } from '@angular/core';
import { MdButton, MdAnchor } from '../../components/button/button';

@Component({
  selector: 'button-demo',
  templateUrl: './button-demo.html',
  styleUrls: ['./button-demo.scss'],
  directives: [MdButton, MdAnchor]
})
export class ButtonDemo {
  isDisabled: boolean = false;
}

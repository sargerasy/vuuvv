import { Component } from '@angular/core';
import { MdButton } from '../../components/button/button';

@Component({
  selector: 'button-demo',
  template: require('./button-demo.html'),
  styles: [require('./button-demo.scss')],
  directives: [MdButton]
})
export class ButtonDemo {}

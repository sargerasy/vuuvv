import { Component } from '@angular/core';
import { MdButton } from '../../components/button/button';
import { MD_CARD_DIRECTIVES } from '../../components/card/card';

@Component({
  selector: 'card-demo',
  template: require('./card-demo.html'),
  styles: [require('./card-demo.scss')],
  directives: [MD_CARD_DIRECTIVES]
})
export class CardDemo {}

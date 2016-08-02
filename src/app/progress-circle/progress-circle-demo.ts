import { Component } from '@angular/core';
import { MdButton } from '../../components/button/button';
import { MdProgressCircle, MdSpinner } from '../../components/progress-circle/progress-circle';

@Component({
  selector: 'progress-circle-demo',
  templateUrl: './progress-circle-demo.html',
  styleUrls: ['./progress-circle-demo.scss'],
  directives: [MdProgressCircle, MdSpinner, MdButton]
})
export class ProgressCircleDemo {
  progressValue: number = 40;

  step(value: number) {
    this.progressValue += value;
  }
}
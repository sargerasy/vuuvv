import {
  Attribute,
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { isPresent } from '@angular/common/src/facade/lang';
import { OneOf } from '../../core/annotations/one-of';

// TODO: Benchpress tests.
class ProgressMode {
  static DETERINATE = 'determinate';
  static INDETERMINATE = 'indeterminate';
}

/**
 * <md-progress-circle>
 */
@Component({
  selector: 'md-progress-circle',
  host: {
    'role': 'progressbar',
    'aria-valuemin': '0',
    'aria-valuemax': '100',
  },
  templateUrl: './progress-circle.html',
  styleUrls: ['./progress-circle.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdProgressCircle {
  /**
   * Value of the progress circle.
   *
   * Input: number, defaults to 0.
   * value_ is bound to the host as the attribute aria-valuenow.
   */
  @HostBinding('attr.aria-valuenow')
  @Input('value')
  value_: number = 0;

  /**
   * Mode of the progress circle
   *
   * Input must be one of the values from ProgressMode, defaults to 'determinate'.
   * mode is bound to the host as the attribute host.
   */
  @HostBinding('attr.mode')
  @Input()
  @OneOf([ProgressMode.DETERINATE, ProgressMode.INDETERMINATE])
  mode: string;

  /**
   * Gets the current stroke dash offset to represent the progress circle.
   *
   * The stroke dash offset specifies the distance between dashes in the circle's stroke.
   * Setting the offset to a percentage of the total circumference of the circle, fills this
   * percentage of the overall circumference of the circle.
   */
  strokeDashOffset() {
    // To determine how far the offset should be, we multiple the current percentage by the
    // total circumference.

    // The total circumference is calculated based on the radius we use, 45.
    // PI * 2 * 45
    return 251.3274 * (100 - this.value_) / 100;
  }

  /** Gets the progress value, returning the clamped value. */
  get value() {
    return this.value_;
  }

  /** Sets the progress value, clamping before setting the internal value. */
  set value(v: number) {
    if (isPresent(v)) {
      this.value_ = MdProgressCircle.clamp(v);
    }
  }

  /** Clamps a value to be between 0 and 100. */
  static clamp(v: number) {
    return Math.max(0, Math.min(100, v));
  }
}

/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-circle> instance.
 */
@Component({
  selector: 'md-spinner',
  host: {
    'role': 'progressbar',
  },
  templateUrl: './progress-circle.html',
  styleUrls: ['./progress-circle.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdSpinner extends MdProgressCircle {
  mode: string = ProgressMode.INDETERMINATE;
}

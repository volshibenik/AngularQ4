import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnChanges,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ac-input-switch',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSwitchComponent),
      multi: true,
    },
  ],
})
export class InputSwitchComponent implements ControlValueAccessor {
  // @Output() change = new EventEmitter();
  checked: boolean = false;
  onChange;
  value;

  writeValue(value) {
    this.checked = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {}

  handleChange(e) {
    console.log('kk', e, '1', this.checked);
    this.onChange(e.checked);
  }
  /* 
  private onChangeFunction: (value: boolean) => void;
  private onTouchedFunction: () => void;

  writeValue(obj: boolean): void {
    if (obj !== undefined && obj !== null) {
      this.checked = obj;
    }
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChangeFunction = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFunction = fn;
  }
  onClick(): void {
    this.checked = !this.checked;
    this.propagateChange();
  }

  propagateChange(): void {
    if (this.onChangeFunction) {
      this.onChangeFunction(this.checked);
    }
    if (this.onTouchedFunction) {
      this.onTouchedFunction();
    }
  } */
}

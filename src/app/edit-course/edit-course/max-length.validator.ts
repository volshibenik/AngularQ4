import { AbstractControl, ValidatorFn } from "@angular/forms";

export default (l: number): ValidatorFn =>
  (control: AbstractControl) =>
    control.value.length < l ? null : { maxLengthExceeded: control.value }


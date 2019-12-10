import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true}]
})
export class MinDateDirective implements Validator {
  @Input() minDate;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (this.minDate && control.value) {
      if (this.minDate > control.value) {
        return { minDate: true};
      }
    }

    return null;
  }
}

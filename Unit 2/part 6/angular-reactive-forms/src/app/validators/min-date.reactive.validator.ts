import { AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

export function minDateValidator(minInputDate: string): ValidatorFn {
  return (c: FormControl): { [key: string]: any } => {
    if (c.value) {
      const minDate = new Date(minInputDate);
      const inputDate = new Date(c.value);
      console.log(minDate, inputDate);
      return minDate <= inputDate
        ? null
        : { minDate: minDate.toLocaleDateString() };
    }
    return null;
  };
}

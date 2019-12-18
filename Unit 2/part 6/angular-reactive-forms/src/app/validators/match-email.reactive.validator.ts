import { FormGroup } from '@angular/forms';

export function matchEmail(c: FormGroup): { [key: string]: any } {
  const email = c.get('email').value;
  const email2 = c.get('emailConfirm').value;
  return email === email2 ? null : { match: true };
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import { minDateValidator } from './validators/min-date.reactive.validator';
import { matchEmail } from './validators/match-email.reactive.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  phones: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        emailConfirm: ['', [Validators.required, Validators.email]]
      }, {validators: matchEmail}),
      phones: this.fb.array([this.getPhoneControl()]),
      password: ['', [Validators.required, Validators.minLength(5)]],
      birthDate: ['', minDateValidator('1900-01-01')],
      notifications: 'email'
    });

    this.phones = this.userForm.get('phones') as FormArray;

    this.userForm.get('notifications').valueChanges
      .subscribe(notif => this.updateNotifMethod(notif));
  }

  private getPhoneControl(): FormControl {
    return this.fb.control('', {validators: Validators.pattern(/[0-9]{9,}/)});
  }

  addPhone() {
    const phones = this.userForm.get('phones') as FormArray;
    phones.push(this.getPhoneControl());
  }

  updateNotifMethod(notif) {
    const phoneControl = this.userForm.get('phone');
    if (notif === 'phone') {
      phoneControl.setValidators([
        Validators.required,
        Validators.pattern(/[0-9]{9,}/)
      ]);
    } else {
      // email (Phone not required)
      phoneControl.setValidators([Validators.pattern(/[0-9]{9,}/)]);
    }
    phoneControl.updateValueAndValidity();
  }

  setDemoData() {
    this.userForm.setValue({
      name: 'Test user',
      email: 'test@test.com',
      password: 'test'
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern(/[0-9]{9,}/)],
      password: ['', [Validators.required, Validators.minLength(5)]],
      notifications: 'email'
    });

    this.userForm.get('notifications').valueChanges
      .subscribe(notif => this.updateNotifMethod(notif));
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

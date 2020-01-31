import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      () => this.router.navigate(['/products']),
      async error => {
        (await this.alertCtrl.create({
          header: 'Login error',
          message: 'Incorrect email and/or password',
          buttons: ['Ok']
        })).present();
      }
    );
  }

}

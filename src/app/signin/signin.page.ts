import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  username: string ;
  password: string ;
  cpassword: string;
  msg: string;
    isA: boolean;
  constructor(public afAuth: AngularFireAuth , private router: Router) { }

  ngOnInit() {
      this.isA = true;
      this.msg = 'Enter a valiad phone number and password';
  }
    login() {
        const {username, password} = this;
        try {
            const res = this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password);
            if (res) {
                console.log('User already in!');
                this.msg = 'User Already in!';
                this.isA = false;
            }
        } catch (err) {
            console.dir(err);
        }
    }
  async signup() {
      const { username , password , cpassword } = this;
      this.login();
      if (this.isA === false) {
          if (this.password !== this.cpassword) {
              console.error('Passwords do not match!');
              this.msg = 'Passwords do not match!';
          } else {
              try {
                  if (this.cpassword.length < 6) {
                     this.msg = 'weak password!';
                  } else {
                      await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password);
                      console.log('sign up successfully!');
                      this.msg = 'sign up successfully!';
                      this.username = null;
                      this.password = null;
                      this.cpassword = null;
                      this.router.navigate(['/verification']);
                  }
              } catch (error) {
                  console.dir(error);
              }
          }
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string ;
  password: string ;
  isA: boolean;
  constructor(public afAuth: AngularFireAuth, private router: Router) { }
  ngOnInit() {
      this.isA = false;
  }
   login() {
    const {username, password} = this;
    try {
      let res = this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password);
      if (res) {
          console.log('okay!');
          this.isA = true;
      }
      if (this.isA === true) {
          this.router.navigate(['/my-acount']);
          this.username = null;
          this.password = null;
          res = null;
      }
     } catch (err) {
      console.dir(err);
    }
  }
}

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
  isA = false ;
  constructor(public afAuth: AngularFireAuth, private router: Router) { }
  ngOnInit() {
  }
   login() {
    const {username, password} = this;
    try {
      let res = this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password);
      if (res) {
          console.log('okay!');
          this.isA = true;
          this.username = null;
          this.password = null;
          res = null;
          if (this.isA === true) {
          this.router.navigate(['/my-acount']);
          }
      } else if (this.isA === false) {
          console.log('not okay!!!!!!!!!!!!!!!!!!!!');
      }
     } catch (err) {
      console.dir(err);
        this.router.navigate(['/login']);
    }
  }
}
